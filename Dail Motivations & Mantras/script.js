const mantras = [
  "I am aligned, I am worthy, and everything meant for me is coming.",
  "Every day I grow stronger, wiser, and more confident.",
  "I attract positive energy and release all that no longer serves me.",
  "I trust the timing of my life and embrace my journey.",
  "I am enough exactly as I am, today and always."
];

const motivations = [
  "You are not behind. You are exactly where you need to be to grow.",
  "Small progress each day adds up to big results over time.",
  "Challenges are opportunities to discover your true strength.",
  "Believe in yourself; your potential is limitless.",
  "Your mindset creates your reality—choose thoughts that empower you."
];

const getTodayIndex = (length) => new Date().getDate() % length;

document.getElementById("dailyMantra").textContent =
  mantras[getTodayIndex(mantras.length)];

document.getElementById("dailyMotivation").textContent =
  motivations[getTodayIndex(motivations.length)];