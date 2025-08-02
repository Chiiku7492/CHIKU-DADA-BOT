module.exports.config = {
  name: "groupNotify",
  version: "2.0",
  hasPermssion: 0,
  credits: "Piyush x Ayush",
  description: "Notify group with Shayari on join/leave/admin",
  commandCategory: "events",
  usages: "Auto",
  cooldowns: 0,
};

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, logMessageType, logMessageData } = event;

  if (logMessageType === "log:subscribe") {
    const name = logMessageData.addedParticipants[0].fullName;
    const msg =
      `🌸❝ ${name} हमारे साथ इस सफर में शामिल हुए ❞\n` +
      `💌 'कभी मिलो तो इतना मुस्कुरा देना,\nके दर्द भी कहे - क्या बात है..!' 🌙✨`;
    api.sendMessage(msg, threadID);
  }

  if (logMessageType === "log:unsubscribe") {
    const leftID = logMessageData.leftParticipantFbId;
    api.getUserInfo(leftID, (err, data) => {
      if (err) return;
      const name = data[leftID]?.name || "कोई सदस्य";
      const msg =
        `💔 ❝ ${name} इस कारवां से जुदा हो गए ❞\n` +
        `🥀 'दिल तो करता है रोक लूं,\nमगर रुकने वाले होते तो जाते क्यों?' 🌧️`;
      api.sendMessage(msg, threadID);
    });
  }

  if (logMessageType === "log:thread-admins") {
    const { ADMIN_EVENT, TARGET_ID } = logMessageData;
    api.getUserInfo(TARGET_ID, (err, data) => {
      if (err) return;
      const name = data[TARGET_ID]?.name || "User";

      if (ADMIN_EVENT === "add_admin") {
        api.sendMessage(
          `🔱 ❝ ${name} को admin बना दिया गया है ❞\n💬 'कुछ लोग साथ होते हैं बस नाम के,\nकुछ लोग नाम होते हैं बस साथ के…' 🌟`,
          threadID
        );
      } else if (ADMIN_EVENT === "remove_admin") {
        api.sendMessage(
          `⚠️ ❝ ${name} अब admin नहीं रहे ❞\n😔 'उड़ गए परिंदे तो क्या हुआ,\nछाँव आज भी याद है उनकी...' 🍃`,
          threadID
        );
      }
    });
  }
};
