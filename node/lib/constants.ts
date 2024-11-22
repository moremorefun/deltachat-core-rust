// Generated!

export enum C {
  DC_CERTCK_ACCEPT_INVALID = 2,
  DC_CERTCK_ACCEPT_INVALID_CERTIFICATES = 3,
  DC_CERTCK_AUTO = 0,
  DC_CERTCK_STRICT = 1,
  DC_CHAT_ID_ALLDONE_HINT = 7,
  DC_CHAT_ID_ARCHIVED_LINK = 6,
  DC_CHAT_ID_LAST_SPECIAL = 9,
  DC_CHAT_ID_TRASH = 3,
  DC_CHAT_TYPE_BROADCAST = 160,
  DC_CHAT_TYPE_GROUP = 120,
  DC_CHAT_TYPE_MAILINGLIST = 140,
  DC_CHAT_TYPE_SINGLE = 100,
  DC_CHAT_TYPE_UNDEFINED = 0,
  DC_CHAT_VISIBILITY_ARCHIVED = 1,
  DC_CHAT_VISIBILITY_NORMAL = 0,
  DC_CHAT_VISIBILITY_PINNED = 2,
  DC_CONNECTIVITY_CONNECTED = 4000,
  DC_CONNECTIVITY_CONNECTING = 2000,
  DC_CONNECTIVITY_NOT_CONNECTED = 1000,
  DC_CONNECTIVITY_WORKING = 3000,
  DC_CONTACT_ID_DEVICE = 5,
  DC_CONTACT_ID_INFO = 2,
  DC_CONTACT_ID_LAST_SPECIAL = 9,
  DC_CONTACT_ID_SELF = 1,
  DC_DOWNLOAD_AVAILABLE = 10,
  DC_DOWNLOAD_DONE = 0,
  DC_DOWNLOAD_FAILURE = 20,
  DC_DOWNLOAD_IN_PROGRESS = 1000,
  DC_DOWNLOAD_UNDECIPHERABLE = 30,
  DC_EVENT_ACCOUNTS_BACKGROUND_FETCH_DONE = 2200,
  DC_EVENT_CHANNEL_OVERFLOW = 2400,
  DC_EVENT_CHATLIST_CHANGED = 2300,
  DC_EVENT_CHATLIST_ITEM_CHANGED = 2301,
  DC_EVENT_CHAT_EPHEMERAL_TIMER_MODIFIED = 2021,
  DC_EVENT_CHAT_MODIFIED = 2020,
  DC_EVENT_CONFIGURE_PROGRESS = 2041,
  DC_EVENT_CONFIG_SYNCED = 2111,
  DC_EVENT_CONNECTIVITY_CHANGED = 2100,
  DC_EVENT_CONTACTS_CHANGED = 2030,
  DC_EVENT_DELETED_BLOB_FILE = 151,
  DC_EVENT_ERROR = 400,
  DC_EVENT_ERROR_SELF_NOT_IN_GROUP = 410,
  DC_EVENT_IMAP_CONNECTED = 102,
  DC_EVENT_IMAP_INBOX_IDLE = 106,
  DC_EVENT_IMAP_MESSAGE_DELETED = 104,
  DC_EVENT_IMAP_MESSAGE_MOVED = 105,
  DC_EVENT_IMEX_FILE_WRITTEN = 2052,
  DC_EVENT_IMEX_PROGRESS = 2051,
  DC_EVENT_INCOMING_MSG = 2005,
  DC_EVENT_INCOMING_MSG_BUNCH = 2006,
  DC_EVENT_INCOMING_REACTION = 2002,
  DC_EVENT_INCOMING_WEBXDC_NOTIFY = 2003,
  DC_EVENT_INFO = 100,
  DC_EVENT_LOCATION_CHANGED = 2035,
  DC_EVENT_MSGS_CHANGED = 2000,
  DC_EVENT_MSGS_NOTICED = 2008,
  DC_EVENT_MSG_DELETED = 2016,
  DC_EVENT_MSG_DELIVERED = 2010,
  DC_EVENT_MSG_FAILED = 2012,
  DC_EVENT_MSG_READ = 2015,
  DC_EVENT_NEW_BLOB_FILE = 150,
  DC_EVENT_REACTIONS_CHANGED = 2001,
  DC_EVENT_SECUREJOIN_INVITER_PROGRESS = 2060,
  DC_EVENT_SECUREJOIN_JOINER_PROGRESS = 2061,
  DC_EVENT_SELFAVATAR_CHANGED = 2110,
  DC_EVENT_SMTP_CONNECTED = 101,
  DC_EVENT_SMTP_MESSAGE_SENT = 103,
  DC_EVENT_WARNING = 300,
  DC_EVENT_WEBXDC_INSTANCE_DELETED = 2121,
  DC_EVENT_WEBXDC_REALTIME_ADVERTISEMENT = 2151,
  DC_EVENT_WEBXDC_REALTIME_DATA = 2150,
  DC_EVENT_WEBXDC_STATUS_UPDATE = 2120,
  DC_GCL_ADD_ALLDONE_HINT = 4,
  DC_GCL_ADD_SELF = 2,
  DC_GCL_ARCHIVED_ONLY = 1,
  DC_GCL_FOR_FORWARDING = 8,
  DC_GCL_NO_SPECIALS = 2,
  DC_GCL_VERIFIED_ONLY = 1,
  DC_GCM_ADDDAYMARKER = 1,
  DC_GCM_INFO_ONLY = 2,
  DC_IMEX_EXPORT_BACKUP = 11,
  DC_IMEX_EXPORT_SELF_KEYS = 1,
  DC_IMEX_IMPORT_BACKUP = 12,
  DC_IMEX_IMPORT_SELF_KEYS = 2,
  DC_INFO_AUTOCRYPT_SETUP_MESSAGE = 6,
  DC_INFO_EPHEMERAL_TIMER_CHANGED = 10,
  DC_INFO_GROUP_IMAGE_CHANGED = 3,
  DC_INFO_GROUP_NAME_CHANGED = 2,
  DC_INFO_INVALID_UNENCRYPTED_MAIL = 13,
  DC_INFO_LOCATIONSTREAMING_ENABLED = 8,
  DC_INFO_LOCATION_ONLY = 9,
  DC_INFO_MEMBER_ADDED_TO_GROUP = 4,
  DC_INFO_MEMBER_REMOVED_FROM_GROUP = 5,
  DC_INFO_PROTECTION_DISABLED = 12,
  DC_INFO_PROTECTION_ENABLED = 11,
  DC_INFO_SECURE_JOIN_MESSAGE = 7,
  DC_INFO_UNKNOWN = 0,
  DC_INFO_WEBXDC_INFO_MESSAGE = 32,
  DC_KEY_GEN_DEFAULT = 0,
  DC_KEY_GEN_ED25519 = 2,
  DC_KEY_GEN_RSA2048 = 1,
  DC_KEY_GEN_RSA4096 = 3,
  DC_LP_AUTH_NORMAL = 4,
  DC_LP_AUTH_OAUTH2 = 2,
  DC_MEDIA_QUALITY_BALANCED = 0,
  DC_MEDIA_QUALITY_WORSE = 1,
  DC_MSG_AUDIO = 40,
  DC_MSG_FILE = 60,
  DC_MSG_GIF = 21,
  DC_MSG_ID_DAYMARKER = 9,
  DC_MSG_ID_LAST_SPECIAL = 9,
  DC_MSG_ID_MARKER1 = 1,
  DC_MSG_IMAGE = 20,
  DC_MSG_STICKER = 23,
  DC_MSG_TEXT = 10,
  DC_MSG_VCARD = 90,
  DC_MSG_VIDEO = 50,
  DC_MSG_VIDEOCHAT_INVITATION = 70,
  DC_MSG_VOICE = 41,
  DC_MSG_WEBXDC = 80,
  DC_PROVIDER_STATUS_BROKEN = 3,
  DC_PROVIDER_STATUS_OK = 1,
  DC_PROVIDER_STATUS_PREPARATION = 2,
  DC_PUSH_CONNECTED = 2,
  DC_PUSH_HEARTBEAT = 1,
  DC_PUSH_NOT_CONNECTED = 0,
  DC_QR_ACCOUNT = 250,
  DC_QR_ADDR = 320,
  DC_QR_ASK_VERIFYCONTACT = 200,
  DC_QR_ASK_VERIFYGROUP = 202,
  DC_QR_BACKUP = 251,
  DC_QR_BACKUP2 = 252,
  DC_QR_ERROR = 400,
  DC_QR_FPR_MISMATCH = 220,
  DC_QR_FPR_OK = 210,
  DC_QR_FPR_WITHOUT_ADDR = 230,
  DC_QR_LOGIN = 520,
  DC_QR_PROXY = 271,
  DC_QR_REVIVE_VERIFYCONTACT = 510,
  DC_QR_REVIVE_VERIFYGROUP = 512,
  DC_QR_TEXT = 330,
  DC_QR_URL = 332,
  DC_QR_WEBRTC_INSTANCE = 260,
  DC_QR_WITHDRAW_VERIFYCONTACT = 500,
  DC_QR_WITHDRAW_VERIFYGROUP = 502,
  DC_SHOW_EMAILS_ACCEPTED_CONTACTS = 1,
  DC_SHOW_EMAILS_ALL = 2,
  DC_SHOW_EMAILS_OFF = 0,
  DC_SOCKET_AUTO = 0,
  DC_SOCKET_PLAIN = 3,
  DC_SOCKET_SSL = 1,
  DC_SOCKET_STARTTLS = 2,
  DC_STATE_IN_FRESH = 10,
  DC_STATE_IN_NOTICED = 13,
  DC_STATE_IN_SEEN = 16,
  DC_STATE_OUT_DELIVERED = 26,
  DC_STATE_OUT_DRAFT = 19,
  DC_STATE_OUT_FAILED = 24,
  DC_STATE_OUT_MDN_RCVD = 28,
  DC_STATE_OUT_PENDING = 20,
  DC_STATE_OUT_PREPARING = 18,
  DC_STATE_UNDEFINED = 0,
  DC_STR_AC_SETUP_MSG_BODY = 43,
  DC_STR_AC_SETUP_MSG_SUBJECT = 42,
  DC_STR_ADD_MEMBER_BY_OTHER = 129,
  DC_STR_ADD_MEMBER_BY_YOU = 128,
  DC_STR_AEAP_ADDR_CHANGED = 122,
  DC_STR_AEAP_EXPLANATION_AND_LINK = 123,
  DC_STR_ARCHIVEDCHATS = 40,
  DC_STR_AUDIO = 11,
  DC_STR_BACKUP_TRANSFER_MSG_BODY = 163,
  DC_STR_BACKUP_TRANSFER_QR = 162,
  DC_STR_BAD_TIME_MSG_BODY = 85,
  DC_STR_BROADCAST_LIST = 115,
  DC_STR_CANNOT_LOGIN = 60,
  DC_STR_CANTDECRYPT_MSG_BODY = 29,
  DC_STR_CHAT_PROTECTION_DISABLED = 171,
  DC_STR_CHAT_PROTECTION_ENABLED = 170,
  DC_STR_CONFIGURATION_FAILED = 84,
  DC_STR_CONNECTED = 107,
  DC_STR_CONNTECTING = 108,
  DC_STR_CONTACT = 200,
  DC_STR_CONTACT_NOT_VERIFIED = 36,
  DC_STR_CONTACT_SETUP_CHANGED = 37,
  DC_STR_CONTACT_VERIFIED = 35,
  DC_STR_DEVICE_MESSAGES = 68,
  DC_STR_DEVICE_MESSAGES_HINT = 70,
  DC_STR_DOWNLOAD_AVAILABILITY = 100,
  DC_STR_DRAFT = 3,
  DC_STR_E2E_AVAILABLE = 25,
  DC_STR_E2E_PREFERRED = 34,
  DC_STR_ENCRYPTEDMSG = 24,
  DC_STR_ENCR_NONE = 28,
  DC_STR_ENCR_TRANSP = 27,
  DC_STR_EPHEMERAL_DAY = 79,
  DC_STR_EPHEMERAL_DAYS = 95,
  DC_STR_EPHEMERAL_DISABLED = 75,
  DC_STR_EPHEMERAL_FOUR_WEEKS = 81,
  DC_STR_EPHEMERAL_HOUR = 78,
  DC_STR_EPHEMERAL_HOURS = 94,
  DC_STR_EPHEMERAL_MINUTE = 77,
  DC_STR_EPHEMERAL_MINUTES = 93,
  DC_STR_EPHEMERAL_SECONDS = 76,
  DC_STR_EPHEMERAL_TIMER_1_DAY_BY_OTHER = 147,
  DC_STR_EPHEMERAL_TIMER_1_DAY_BY_YOU = 146,
  DC_STR_EPHEMERAL_TIMER_1_HOUR_BY_OTHER = 145,
  DC_STR_EPHEMERAL_TIMER_1_HOUR_BY_YOU = 144,
  DC_STR_EPHEMERAL_TIMER_1_MINUTE_BY_OTHER = 143,
  DC_STR_EPHEMERAL_TIMER_1_MINUTE_BY_YOU = 142,
  DC_STR_EPHEMERAL_TIMER_1_WEEK_BY_OTHER = 149,
  DC_STR_EPHEMERAL_TIMER_1_WEEK_BY_YOU = 148,
  DC_STR_EPHEMERAL_TIMER_DAYS_BY_OTHER = 155,
  DC_STR_EPHEMERAL_TIMER_DAYS_BY_YOU = 154,
  DC_STR_EPHEMERAL_TIMER_DISABLED_BY_OTHER = 139,
  DC_STR_EPHEMERAL_TIMER_DISABLED_BY_YOU = 138,
  DC_STR_EPHEMERAL_TIMER_HOURS_BY_OTHER = 153,
  DC_STR_EPHEMERAL_TIMER_HOURS_BY_YOU = 152,
  DC_STR_EPHEMERAL_TIMER_MINUTES_BY_OTHER = 151,
  DC_STR_EPHEMERAL_TIMER_MINUTES_BY_YOU = 150,
  DC_STR_EPHEMERAL_TIMER_SECONDS_BY_OTHER = 141,
  DC_STR_EPHEMERAL_TIMER_SECONDS_BY_YOU = 140,
  DC_STR_EPHEMERAL_TIMER_WEEKS_BY_OTHER = 157,
  DC_STR_EPHEMERAL_TIMER_WEEKS_BY_YOU = 156,
  DC_STR_EPHEMERAL_WEEK = 80,
  DC_STR_EPHEMERAL_WEEKS = 96,
  DC_STR_ERROR = 112,
  DC_STR_ERROR_NO_NETWORK = 87,
  DC_STR_FAILED_SENDING_TO = 74,
  DC_STR_FILE = 12,
  DC_STR_FINGERPRINTS = 30,
  DC_STR_FORWARDED = 97,
  DC_STR_GIF = 23,
  DC_STR_GROUP_IMAGE_CHANGED_BY_OTHER = 127,
  DC_STR_GROUP_IMAGE_CHANGED_BY_YOU = 126,
  DC_STR_GROUP_IMAGE_DELETED_BY_OTHER = 135,
  DC_STR_GROUP_IMAGE_DELETED_BY_YOU = 134,
  DC_STR_GROUP_LEFT_BY_OTHER = 133,
  DC_STR_GROUP_LEFT_BY_YOU = 132,
  DC_STR_GROUP_NAME_CHANGED_BY_OTHER = 125,
  DC_STR_GROUP_NAME_CHANGED_BY_YOU = 124,
  DC_STR_IMAGE = 9,
  DC_STR_INCOMING_MESSAGES = 103,
  DC_STR_INVALID_UNENCRYPTED_MAIL = 174,
  DC_STR_LAST_MSG_SENT_SUCCESSFULLY = 111,
  DC_STR_LOCATION = 66,
  DC_STR_LOCATION_ENABLED_BY_OTHER = 137,
  DC_STR_LOCATION_ENABLED_BY_YOU = 136,
  DC_STR_MESSAGES = 114,
  DC_STR_MESSAGE_ADD_MEMBER = 173,
  DC_STR_MSGACTIONBYME = 63,
  DC_STR_MSGACTIONBYUSER = 62,
  DC_STR_MSGADDMEMBER = 17,
  DC_STR_MSGDELMEMBER = 18,
  DC_STR_MSGGROUPLEFT = 19,
  DC_STR_MSGGRPIMGCHANGED = 16,
  DC_STR_MSGGRPIMGDELETED = 33,
  DC_STR_MSGGRPNAME = 15,
  DC_STR_MSGLOCATIONDISABLED = 65,
  DC_STR_MSGLOCATIONENABLED = 64,
  DC_STR_NEW_GROUP_SEND_FIRST_MESSAGE = 172,
  DC_STR_NOMESSAGES = 1,
  DC_STR_NOT_CONNECTED = 121,
  DC_STR_NOT_SUPPORTED_BY_PROVIDER = 113,
  DC_STR_ONE_MOMENT = 106,
  DC_STR_OUTGOING_MESSAGES = 104,
  DC_STR_PARTIAL_DOWNLOAD_MSG_BODY = 99,
  DC_STR_PART_OF_TOTAL_USED = 116,
  DC_STR_QUOTA_EXCEEDING_MSG_BODY = 98,
  DC_STR_REACTED_BY = 177,
  DC_STR_READRCPT = 31,
  DC_STR_READRCPT_MAILBODY = 32,
  DC_STR_REMOVE_MEMBER_BY_OTHER = 131,
  DC_STR_REMOVE_MEMBER_BY_YOU = 130,
  DC_STR_REPLY_NOUN = 90,
  DC_STR_SAVED_MESSAGES = 69,
  DC_STR_SECUREJOIN_WAIT = 190,
  DC_STR_SECUREJOIN_WAIT_TIMEOUT = 191,
  DC_STR_SECURE_JOIN_GROUP_QR_DESC = 120,
  DC_STR_SECURE_JOIN_REPLIES = 118,
  DC_STR_SECURE_JOIN_STARTED = 117,
  DC_STR_SELF = 2,
  DC_STR_SELF_DELETED_MSG_BODY = 91,
  DC_STR_SENDING = 110,
  DC_STR_SERVER_TURNED_OFF = 92,
  DC_STR_SETUP_CONTACT_QR_DESC = 119,
  DC_STR_STICKER = 67,
  DC_STR_STORAGE_ON_DOMAIN = 105,
  DC_STR_SUBJECT_FOR_NEW_CONTACT = 73,
  DC_STR_SYNC_MSG_BODY = 102,
  DC_STR_SYNC_MSG_SUBJECT = 101,
  DC_STR_UNKNOWN_SENDER_FOR_CHAT = 72,
  DC_STR_UPDATE_REMINDER_MSG_BODY = 86,
  DC_STR_UPDATING = 109,
  DC_STR_VIDEO = 10,
  DC_STR_VIDEOCHAT_INVITATION = 82,
  DC_STR_VIDEOCHAT_INVITE_MSG_BODY = 83,
  DC_STR_VOICEMESSAGE = 7,
  DC_STR_WELCOME_MESSAGE = 71,
  DC_STR_YOU_REACTED = 176,
  DC_TEXT1_DRAFT = 1,
  DC_TEXT1_SELF = 3,
  DC_TEXT1_USERNAME = 2,
  DC_VIDEOCHATTYPE_BASICWEBRTC = 1,
  DC_VIDEOCHATTYPE_JITSI = 2,
  DC_VIDEOCHATTYPE_UNKNOWN = 0,
}

// Generated!

export const EventId2EventName: { [key: number]: string } = {
  100: 'DC_EVENT_INFO',
  101: 'DC_EVENT_SMTP_CONNECTED',
  102: 'DC_EVENT_IMAP_CONNECTED',
  103: 'DC_EVENT_SMTP_MESSAGE_SENT',
  104: 'DC_EVENT_IMAP_MESSAGE_DELETED',
  105: 'DC_EVENT_IMAP_MESSAGE_MOVED',
  106: 'DC_EVENT_IMAP_INBOX_IDLE',
  150: 'DC_EVENT_NEW_BLOB_FILE',
  151: 'DC_EVENT_DELETED_BLOB_FILE',
  300: 'DC_EVENT_WARNING',
  400: 'DC_EVENT_ERROR',
  410: 'DC_EVENT_ERROR_SELF_NOT_IN_GROUP',
  2000: 'DC_EVENT_MSGS_CHANGED',
  2001: 'DC_EVENT_REACTIONS_CHANGED',
  2002: 'DC_EVENT_INCOMING_REACTION',
  2003: 'DC_EVENT_INCOMING_WEBXDC_NOTIFY',
  2005: 'DC_EVENT_INCOMING_MSG',
  2006: 'DC_EVENT_INCOMING_MSG_BUNCH',
  2008: 'DC_EVENT_MSGS_NOTICED',
  2010: 'DC_EVENT_MSG_DELIVERED',
  2012: 'DC_EVENT_MSG_FAILED',
  2015: 'DC_EVENT_MSG_READ',
  2016: 'DC_EVENT_MSG_DELETED',
  2020: 'DC_EVENT_CHAT_MODIFIED',
  2021: 'DC_EVENT_CHAT_EPHEMERAL_TIMER_MODIFIED',
  2030: 'DC_EVENT_CONTACTS_CHANGED',
  2035: 'DC_EVENT_LOCATION_CHANGED',
  2041: 'DC_EVENT_CONFIGURE_PROGRESS',
  2051: 'DC_EVENT_IMEX_PROGRESS',
  2052: 'DC_EVENT_IMEX_FILE_WRITTEN',
  2060: 'DC_EVENT_SECUREJOIN_INVITER_PROGRESS',
  2061: 'DC_EVENT_SECUREJOIN_JOINER_PROGRESS',
  2100: 'DC_EVENT_CONNECTIVITY_CHANGED',
  2110: 'DC_EVENT_SELFAVATAR_CHANGED',
  2111: 'DC_EVENT_CONFIG_SYNCED',
  2120: 'DC_EVENT_WEBXDC_STATUS_UPDATE',
  2121: 'DC_EVENT_WEBXDC_INSTANCE_DELETED',
  2150: 'DC_EVENT_WEBXDC_REALTIME_DATA',
  2151: 'DC_EVENT_WEBXDC_REALTIME_ADVERTISEMENT',
  2200: 'DC_EVENT_ACCOUNTS_BACKGROUND_FETCH_DONE',
  2300: 'DC_EVENT_CHATLIST_CHANGED',
  2301: 'DC_EVENT_CHATLIST_ITEM_CHANGED',
  2400: 'DC_EVENT_CHANNEL_OVERFLOW',
}
