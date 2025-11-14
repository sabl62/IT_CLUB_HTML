let i = 0;
let num = document.getElementById("count");
let colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "aqua",
  "darkblue",
  "blueviolet",
];
function appendNumbers() {
  let color = colors[Math.floor(Math.random() * 8)];
  i++;
  num.innerText = i;
  num.style.color = color;
  if (i == 10) {
    alert("Reached 10!");
  }
}

function decrease() {
  let color = colors[Math.floor(Math.random() * 8)];
  i--;
  num.innerText = i;
  num.style.color = color;
  if (i == -1) {
    alert("Stop! Getting Negative");
  }
}

function changeBackground() {
  let color = colors[Math.floor(Math.random() * 8)];
  document.body.style.backgroundColor = color;
}

setInterval(() => {
  changeBackground()
}, 1000);