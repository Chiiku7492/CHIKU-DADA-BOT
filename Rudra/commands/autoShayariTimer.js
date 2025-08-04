module.exports.config = {
  name: "autoShayariTimer",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Piyush",
  description: "Auto Shayari every 30 minutes",
  commandCategory: "system",
  usages: "No command needed",
  cooldowns: 5,
};

const shayariList = [
  "💔 ❝ तेरे बिना ज़िन्दगी अधूरी सी लगती है ❞ 💔",
  "🌙 ❝ मोहब्बत की इन्तहा चाहिए... मुझे ❞ 🥀",
  "🥹 ❝ जो दिल से उतर जाए, वो लौटकर नहीं आता ❞",
  "🦋 ❝ इश्क़ वो नहीं जो सूरत से हो... ❞",
  "🔥 ❝ तू पास नहीं फिर भी तू साथ है... ❞"
];

// 🕒 Time interval: 30 minutes (in milliseconds)
const intervalTime = 30 * 60 * 1000;

let intervalID;

module.exports.onLoad = async ({ api }) => {
  const threads = await api.getThreadList(20, null, ["INBOX"]);
  const threadIDs = threads.map(t => t.threadID);

  intervalID = setInterval(() => {
    const shayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    threadIDs.forEach(threadID => {
      api.sendMessage(`🌸 Auto Shayari:\n\n${shayari}`, threadID);
    });
  }, intervalTime);
};

module.exports.run = () => {};
