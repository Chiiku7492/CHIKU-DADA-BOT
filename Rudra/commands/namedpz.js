const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "namedpz",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Piyush Kumar",
  description: "Stylish Name से DPZ बनाएं",
  commandCategory: "img",
  usages: "[YourName]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  const name = args.join(" ");
  if (!name) return api.sendMessage("✍️ कृपया अपना नाम दें!\nउदाहरण: namedpz Ayush", event.threadID, event.messageID);

  try {
    const url = `https://api.samir324.repl.co/dpz?name=${encodeURIComponent(name)}`;
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    const path = __dirname + `/cache/nameDPZ.jpg`;
    fs.writeFileSync(path, Buffer.from(response.data, "utf-8"));

    api.sendMessage({
      body: `🖼️ Here's your DPZ for: ${name}`,
      attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (err) {
    console.error(err);
    return api.sendMessage("⚠️ कुछ गड़बड़ हो गई! शायद API काम नहीं कर रही।", event.threadID, event.messageID);
  }
};
