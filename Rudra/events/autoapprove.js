module.exports.config = {
  name: "autoapprove",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Piyush",
  description: "Auto approve system for specific messages",
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};

module.exports.handleEvent = async function ({ event, api }) {
  const { threadID, senderID, body } = event;
  if (!body) return;

  const lowerCaseBody = body.toLowerCase();

  // ✅ अगर message में 'request' या 'join' शब्द है, तो auto approve करो
  if (lowerCaseBody.includes("request") || lowerCaseBody.includes("join")) {
    api.sendMessage(`✅ आपकी request auto-approve कर दी गई है!`, threadID);
    api.sendMessage(`🎉 बधाई हो! आपकी request auto-approve हो चुकी है।`, senderID);
  }
};

module.exports.run = async () => {};
