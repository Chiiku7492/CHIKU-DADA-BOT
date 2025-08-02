module.exports.config = {
  name: "emojiAuto",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Piyush",
  description: "Auto reply to emojis",
  commandCategory: "auto",
  usages: "Auto emoji reply",
  cooldowns: 1
};

module.exports.handleEvent = async function ({ api, event }) {
  const emojiReplies = {
    "😂": "हाहा! मजेदार था 😄",
    "❤️": "लव यू टू 💖",
    "🥺": "ओह नो... क्या हुआ? 🥺💔",
    "👍": "शाबाश! 👍",
    "🔥": "बिलकुल आग है! 🔥",
    "😡": "किस पर गुस्सा है? 😠",
    "🙏": "धन्यवाद 🙏"
  };

  const message = event.body;
  if (!message) return;

  for (const emoji in emojiReplies) {
    if (message.includes(emoji)) {
      return api.sendMessage(emojiReplies[emoji], event.threadID, event.messageID);
    }
  }
};

module.exports.run = async function () {
  // Command manually run नहीं होती, ये auto reply है
};
