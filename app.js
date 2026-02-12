const chat = document.getElementById("chat");
const input = document.getElementById("input");
const momentInput = document.getElementById("momentInput");
const momentFeed = document.getElementById("momentFeed");

function saveWorld(){
  localStorage.setItem("world",document.getElementById("world").value);
}

async function send(){
  const text=input.value;
  if(!text) return;
  chat.innerHTML+=`<div class="bubble user">${text}</div>`;
  input.value="";

  const world=localStorage.getItem("world")||"";

  const res=await fetch("https://fragrant-waterfall-928b.f0931257661.workers.dev/",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({message:text,world})
  });
  const data=await res.json();
  chat.innerHTML+=`<div class="bubble bot">${data.reply}</div>`;
}

async function postMoment(){
  const text=momentInput.value;
  if(!text) return;
  momentFeed.innerHTML+=`<div class="bubble user">${text}</div>`;
  momentInput.value="";
}