module.exports.config = {
  name: "autowelcome",
  eventType: ["log:subscribe"],
  version: "1.1.0",
  credits: "Piyush",
  description: "Auto welcome bot with group rules in English"
};

module.exports.run = async function({ api, event }) {
  const { threadID, logMessageData } = event;
  const addedUser = logMessageData.addedParticipants[0];

  const name = addedUser.fullName;
  const uid = addedUser.userFbId;

  const msg = `🌟 𝙉𝘼𝙈𝘼𝙎𝙏𝙀 @${name} जी!
🎉 𝙄𝙨 𝙂𝙧𝙤𝙪𝙥 𝙈𝙚𝙞𝙣 𝘼𝙖𝙥𝙠𝙖 𝙃𝙖𝙧𝙙𝙞𝙠 𝙎𝙬𝙖𝙜𝙖𝙩 𝙃𝙖𝙞!

📜 𝙆𝙧𝙞𝙥𝙖𝙮𝙖 𝙉𝙞𝙮𝙖𝙢 𝙋𝙖𝙡𝙖𝙣 𝙆𝙖𝙧𝙚𝙞𝙣:

1️⃣ 𝘚𝘢𝘣𝘩𝘪 𝘴𝘦 𝘴𝘢𝘮𝘮𝘢𝘯 𝘴𝘦 𝘱𝘦𝘴𝘩 𝘢𝘢𝘪𝘺𝘦।
2️⃣ 𝘈𝘴𝘩𝘭𝘦𝘦𝘭 𝘤𝘰𝘯𝘵𝘦𝘯𝘵 𝘯𝘢 𝘱𝘰𝘴𝘵 𝘬𝘪𝘫𝘪𝘺𝘦।
3️⃣ 𝘚𝘱𝘢𝘮 𝘺𝘢 𝘜𝘯𝘸𝘢𝘯𝘵𝘦𝘥 𝘭𝘪𝘯𝘬𝘴 𝘯𝘢 𝘥𝘦𝘪𝘯।
4️⃣ 𝘈𝘤𝘵𝘪𝘷𝘦 𝘳𝘢𝘩𝘪𝘺𝘦, 𝘮𝘢𝘻𝘢 𝘭𝘪𝘫𝘪𝘺𝘦।

💬 अपना परिचय दे और बातचीत का आनंद ले धन्यबाद 🖤🥰!`;

  return api.sendMessage({
    body: msg,
    mentions: [{
      tag: name,
      id: uid
    }]
  }, threadID);
};
