const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "coupledpz",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Piyush Kumar",
  description: "Couple Name Stylish DPZ Generate करें",
  commandCategory: "img",
  usages: "[BoyName] | [GirlName]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const input = args.join(" ").split("|");
  const boyName = input[0]?.trim();
  const girlName = input[1]?.trim();

  if (!boyName || !girlName)
    return api.sendMessage("💑 कृपया दोनों नाम दें!\nउदाहरण:\ncoupledpz Raj | Simran", event.threadID, event.messageID);

  try {
    const apiUrl = `https://api.samir324.repl.co/couplename?boy=${encodeURIComponent(boyName)}&girl=${encodeURIComponent(girlName)}`;
    const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });

    const imgPath = __dirname + `/cache/coupledpz.jpg`;
    fs.writeFileSync(imgPath, Buffer.from(res.data, 'utf-8'));

    return api.sendMessage({
      body: `💕 Couple DPZ\n👦 ${boyName} + 👧 ${girlName}`,
      attachment: fs.createReadStream(imgPath)
    }, event.threadID, () => fs.unlinkSync(imgPath), event.messageID);

  } catch (e) {
    console.error(e);
    return api.sendMessage("❌ एरर आ गया! API बंद हो सकती है या नाम गलत है।", event.threadID, event.messageID);
  }
};
