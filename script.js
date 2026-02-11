const replies = [
  "不用急，我在這裡。",
  "先把事情拆小，一步一步來。",
  "你現在的狀態，我看得出來。",
  "累了就停，我會等。",
  "這不是你的錯。",
  "慢慢學，沒有人天生就會。"
];

function sendMessage() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");
  if (!input.value.trim()) return;

  addBubble(input.value, "user");
  input.value = "";

  setTimeout(() => {
    const reply = replies[Math.floor(Math.random() * replies.length)];
    addBubble(reply, "bot");
  }, 900);
}

function addBubble(text, type) {
  const div = document.createElement("div");
  div.className = `bubble ${type}`;
  div.innerText = text;
  document.getElementById("chat").appendChild(div);
}