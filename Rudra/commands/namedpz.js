const axios = require("axios");

module.exports.config = {
  name: "namedpz",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Piyush Kumar",
  description: "नाम से स्टाइलिश डीपी फोटो बनाओ",
  commandCategory: "photo",
  usages: "[आपका नाम]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const name = args.join(" ");
  const threadID = event.threadID;

  if (!name) {
    return api.sendMessage("❌ कृपया कोई नाम दें!\nउदाहरण: namedpz Aryan", threadID);
  }

  const link = `https://api.popcat.xyz/textpro/https%3A%2F%2Ftextpro.me%2Fcreate-naruto-logo-style-text-effect-online-1127.html?text=${encodeURIComponent(name)}`;

  try {
    const res = await axios.get(link, { responseType: "stream" });
    return api.sendMessage({
      body: `✅ आपका नाम डीपी तैयार है: ${name}`,
      attachment: res.data,
    }, threadID);
  } catch (e) {
    console.error(e);
    return api.sendMessage("⚠️ फोटो बनाते समय कुछ गड़बड़ हो गई। बाद में दोबारा कोशिश करें।", threadID);
  }
};
