const axios = require("axios");

module.exports.config = {
  name: "funnyshayari",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Ayush x ChatGPT",
  description: "Send a random funny shayari",
  commandCategory: "fun",
  usages: "[funnyshayari]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  try {
    const res = await axios.get("https://api.ankush.codes/api/funny-shayari");
    const shayari = res.data.data;

    const msg = `🤣 𝐅𝐔𝐍𝐍𝐘 𝐒𝐇𝐀𝐘𝐀𝐑𝐈 🤪\n\n❝ ${shayari} ❞\n\n😆 हँसते रहो ज़िन्दगी भर 𝗖𝗥𝗘𝗔𝗧 𝗕𝗬 𝗔𝗬𝗨𝗦𝗛!`;

    return api.sendMessage(msg, event.threadID, event.messageID);
  } catch (err) {
    console.error(err);
    return api.sendMessage("😬 शायरी लोड नहीं हो पाई, कृपया बाद में कोशिश करें।", event.threadID);
  }
};
