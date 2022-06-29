import { strictEqual } from "assert";
import chai, { assert, expect } from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
import { DeltaChat } from "../deltachat.js";

import {
  RpcServerHandle,
  startServer,
} from "./test_base.js";

describe("basic tests", () => {
  let serverHandle: RpcServerHandle;
  let dc: DeltaChat;

  before(async () => {
    serverHandle = await startServer();
    // make sure server is up by the time we continue
    await new Promise((res) => setTimeout(res, 100));
    dc = new DeltaChat(serverHandle.url)
    // dc.on("ALL", (event) => {
      //console.log("event", event);
    // });
  });

  after(async () => {
    dc && dc.close();
    await serverHandle.close();
  });

  it("check email address validity", async () => {
    const validAddresses = [
      "email@example.com",
      "36aa165ae3406424e0c61af17700f397cad3fe8ab83d682d0bddf3338a5dd52e@yggmail@yggmail",
    ];
    const invalidAddresses = ["email@", "example.com", "emai221"];

    expect(
      await Promise.all(
        validAddresses.map((email) => dc.rpc.checkEmailValidity(email))
      )
    ).to.not.contain(false);

    expect(
      await Promise.all(
        invalidAddresses.map((email) => dc.rpc.checkEmailValidity(email))
      )
    ).to.not.contain(true);
  });

  it("system info", async () => {
    const systemInfo = await dc.rpc.getSystemInfo();
    expect(systemInfo).to.contain.keys([
      "arch",
      "num_cpus",
      "deltachat_core_version",
      "sqlite_version",
    ]);
  });

  describe("account managment", () => {
    it("should create account", async () => {
      const res = await dc.rpc.addAccount();
      assert((await dc.rpc.getAllAccountIds()).length === 1);
    });

    it("should remove the account again", async () => {
      await dc.rpc.removeAccount((await dc.rpc.getAllAccountIds())[0]);
      assert((await dc.rpc.getAllAccountIds()).length === 0);
    });

    it("should create multiple accounts", async () => {
      await dc.rpc.addAccount();
      await dc.rpc.addAccount();
      await dc.rpc.addAccount();
      await dc.rpc.addAccount();
      assert((await dc.rpc.getAllAccountIds()).length === 4);
    });
  });

  describe("contact managment", function () {
    let accountId: number;
    before(async () => {
      accountId = await dc.rpc.addAccount();
    });
    it("should block and unblock contact", async function () {
      const contactId = await dc.rpc.contactsCreateContact(
        accountId,
        "example@delta.chat",
        null
      );
      expect((await dc.rpc.contactsGetContact(accountId, contactId)).is_blocked).to.be
        .false;
      await dc.rpc.contactsBlock(accountId, contactId);
      expect((await dc.rpc.contactsGetContact(accountId, contactId)).is_blocked).to.be
        .true;
      expect(await dc.rpc.contactsGetBlocked(accountId)).to.have.length(1);
      await dc.rpc.contactsUnblock(accountId, contactId);
      expect((await dc.rpc.contactsGetContact(accountId, contactId)).is_blocked).to.be
        .false;
      expect(await dc.rpc.contactsGetBlocked(accountId)).to.have.length(0);
    });
  });

  describe("configuration", function () {
    let accountId: number;
    before(async () => {
      accountId = await dc.rpc.addAccount();
    });

    it("set and retrive", async function () {
      await dc.rpc.setConfig(accountId, "addr", "valid@email");
      assert((await dc.rpc.getConfig(accountId, "addr")) == "valid@email");
    });
    it("set invalid key should throw", async function () {
      await expect(dc.rpc.setConfig(accountId, "invalid_key", "some value")).to.be
        .eventually.rejected;
    });
    it("get invalid key should throw", async function () {
      await expect(dc.rpc.getConfig(accountId, "invalid_key")).to.be.eventually
        .rejected;
    });
    it("set and retrive ui.*", async function () {
      await dc.rpc.setConfig(accountId, "ui.chat_bg", "color:red");
      assert((await dc.rpc.getConfig(accountId, "ui.chat_bg")) == "color:red");
    });
    it("set and retrive (batch)", async function () {
      const config = { addr: "valid@email", mail_pw: "1234" };
      await dc.rpc.batchSetConfig(accountId, config);
      const retrieved = await dc.rpc.batchGetConfig(accountId, Object.keys(config));
      expect(retrieved).to.deep.equal(config);
    });
    it("set and retrive ui.* (batch)", async function () {
      const config = {
        "ui.chat_bg": "color:green",
        "ui.enter_key_sends": "true",
      };
      await dc.rpc.batchSetConfig(accountId, config);
      const retrieved = await dc.rpc.batchGetConfig(accountId, Object.keys(config));
      expect(retrieved).to.deep.equal(config);
    });
    it("set and retrive mixed(ui and core) (batch)", async function () {
      const config = {
        "ui.chat_bg": "color:yellow",
        "ui.enter_key_sends": "false",
        addr: "valid2@email",
        mail_pw: "123456",
      };
      await dc.rpc.batchSetConfig(accountId, config);
      const retrieved = await dc.rpc.batchGetConfig(accountId, Object.keys(config));
      expect(retrieved).to.deep.equal(config);
    });
  });
});
