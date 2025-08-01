module.exports.config = {
  name: "emoji",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Piyush",
  description: "Reply with cute messages on emoji",
  commandCategory: "fun",
  usages: "[emoji]",
  cooldowns: 1
};

module.exports.run = async function({ api, event }) {
  const message = event.body;

  // Emoji replies
  const emojiReplies = {
    "❤️": "Aww, love you too ❤️😘",
    "🥺": "Kya hua jaanu? 🥺💔",
    "😂": "Hahaha! Tumhari hasi sabse pyaari hai 😄",
    "😡": "Arre baby gussa mat ho 😢, mujhe sorry bolo 🙏",
    "😍": "Bas kar pagli, rulaayegi kya? 😍💘",
    "😢": "Kya hua jaan, kisne rulaya? 😢💔",
    "😘": "Muahhh 😘😘😘",
    "😎": "Style dekho bawaal 🔥😎",
    "🤬": "Arre arre, itna gussa kyu 🤭",
    "🤗": "A tight hug for you 🤗💖"
  };

  if (emojiReplies[message]) {
    return api.sendMessage(emojiReplies[message], event.threadID, event.messageID);
  } else {
    return api.sendMessage("Emoji toh bheja, lekin uska jawab mere paas नहीं है! 😅", event.threadID, event.messageID);
  }
};
