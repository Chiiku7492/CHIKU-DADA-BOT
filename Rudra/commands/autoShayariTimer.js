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
  "💔 ❝ Lakho ki hasi tumhare naam Kar denge har Khushi tumpe kurban Kar denge aaye agar hamare pyar me koi bhi kami to kahe Dena is jindagi ko aakhri Salam keh denge ❞ 💔",
  "🌙 ❝ Unka Waada Hai Ke Wo Laut Aayenge Isi Ummeed Par Ham Jeeye JayengeYeh  Intezaar Bhi Unhi Ki Tarah Pyara HaiKar Rahe The Kar Rahe Hein Aur Kiye Jayenge ❞🥀",
  "🥹 ❝ Aap se door ho kar hum jayenge kaha Aap jaisa dost hum payenge kaha Dil ko kaise bhi sambhal lenge Par aankho ke aansu hum chupayege kaha ❞ ❞",
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
      api.sendMessage(`🖤𝗔𝗬𝗨𝗦𝗛 𝗧𝗛𝗔𝗞𝗨𝗥 𝗔𝗨𝗧𝗢𝗧𝗜𝗠𝗘𝗥 𝗦𝗛𝗔𝗬𝗥𝗜 🖤🥰:\n\n${shayari}`, threadID);
    });
  }, intervalTime);
};

module.exports.run = () => {};
