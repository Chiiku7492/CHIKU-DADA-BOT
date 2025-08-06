const fs = require("fs");

module.exports.config = {
  name: "autowellcome",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Piyush",
  description: "Auto welcome new members",
  commandCategory: "group",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, logMessageType, logMessageData } = event;
  if (logMessageType === "log:subscribe") {
    const name = logMessageData.addedParticipants[0].fullName;
    const userID = logMessageData.addedParticipants[0].userFbId;

    const msg = `🌟 𝙉𝘼𝙈𝘼𝙎𝙏𝙀 @${name} जी!🎉 𝙄𝙨 𝙂𝙧𝙤𝙪𝙥 𝙈𝙚𝙞𝙣 𝘼𝙖𝙥𝙠𝙖 𝙃𝙖𝙧𝙙𝙞𝙠 𝙎𝙬𝙖𝙜𝙖𝙩 𝙃𝙖𝙞!`;

    return api.sendMessage({
      body: msg,
      mentions: [{
        tag: name,
        id: userID,
      }]
    }, threadID);
  }
};

module.exports.run = async function() {};
