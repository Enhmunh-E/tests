let last = { x: 0, y: 0 };
const eyes = document.getElementById("eyes");
const height = window.innerHeight,
  width = window.innerWidth;
const move = (x, y, e) => {
  eyes.style.top = y + "px";
  eyes.style.left = x + "px";
  eyes.style.transform = `rotate(${
    (Math.atan2(y - e.clientY, x - e.clientX) * 180) / Math.PI
  }deg)`;
};
document.onclick = (e) => {
  let newX = Math.floor(Math.random() * window.innerWidth),
    newY = Math.floor(Math.random() * window.innerHeight);
  move(newX, newY, e);
  last = {
    x: newX,
    y: newY,
  };
};

// document.onmousemove = (e) => {
//   eyes.style.transform = `rotate(${
//     (Math.atan2(last.y - e.clientY, last.x - e.clientX) * 180) / Math.PI
//   }deg)`;
// };
