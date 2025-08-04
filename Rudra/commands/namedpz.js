const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "namedpz",
  version: "1.0",
  hasPermssion: 0,
  credits: "Piyush", 
  description: "नाम से DPZ फोटो बनाएं",
  commandCategory: "image",
  usages: "[तुम्हारा नाम]",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  const name = args.join(" ");
  if (!name) return api.sendMessage("❌ कृपया एक नाम डालें जैसे: +namedpz Ayush", event.threadID, event.messageID);

  try {
    api.sendMessage("📸 कृपया इंतजार करें, आपकी DPZ बन रही है...", event.threadID, event.messageID);

    const photooxyURL = `https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html`;

    const { data } = await axios({
      method: "POST",
      url: "https://api.zahwazein.xyz/photooxy1",
      params: {
        text: name,
        link: photooxyURL
      }
    });

    const imgURL = data.result;
    const imgPath = __dirname + `/cache/dpz_${event.senderID}.jpg`;
    const imgRes = await axios.get(imgURL, { responseType: "arraybuffer" });
    fs.writeFileSync(imgPath, Buffer.from(imgRes.data, "utf-8"));

    api.sendMessage({ body: `✨ Here's your DPZ, ${name} 💖`, attachment: fs.createReadStream(imgPath) }, event.threadID, () => fs.unlinkSync(imgPath));

  } catch (err) {
    console.log(err);
    return api.sendMessage("⚠️ फोटो बनाते समय कुछ गड़बड़ हो गई। कृपया बाद में कोशिश करें।", event.threadID, event.messageID);
  }
};
