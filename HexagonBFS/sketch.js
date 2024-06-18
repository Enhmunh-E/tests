const n = window.innerHeight / 50,
  m = window.innerWidth / 60;
const height = 70,
  width = 60;
const defaultPositions = [
  [30, 0],
  [60, 20],
  [60, 50],
  [30, 70],
  [0, 50],
  [0, 20],
];
let X = 0,
  Y = 0;

const svgContainer = document.createElementNS(
  "https://www.w3.org/2000/svg",
  "svg"
);
svgContainer.setAttributeNS(null, "width", window.innerWidth);
svgContainer.setAttributeNS(null, "height", window.innerHeight);
svgContainer.setAttributeNS(
  null,
  "viewBox",
  `0 0 ${window.innerHeight} ${window.innerWidth}`
);

const container = document.getElementById("root");

container.appendChild(svgContainer);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    hexagon(width * j + (i % 2 !== 0 ? 30 : 0) + X, height * i + Y);
  }
  Y -= 20;
}

// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight);
// }

// function draw() {
//   background(100);
//   stroke(0);
//   strokeWeight(2);
//   stroke(0);
//   strokeWeight(2);
//   let Y = -20,
//     X = -30;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       hexagon(width * j + (i % 2 !== 0 ? 30 : 0) + X, height * i + Y);
//     }
//     Y -= 20;
//   }
// }

function hexagon(transX, transY) {
  // <polygon points="50 3,100 28,100 75, 50 100,3 75,3 25"
  //     		stroke="black"
  // 		fill="yellow"stroke-width="5" />
  var polygon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );
  const points = defaultPositions
    .map(([x, y]) => [`${x + transX} ${y + transY}`])
    .join(", ");
  polygon.setAttributeNS(null, "points", points);
  polygon.setAttributeNS(null, "stroke", "#000");
  polygon.setAttributeNS(null, "stroke-width", ".5");
  svgContainer.appendChild(polygon);
  // stroke(255);
  // const randomize = () => Math.round(Math.random() * 255);
  // // fill(`rgba(${randomize()}, ${randomize()}, ${randomize()}, .25)`);
  // fill(`rgba(255, 255, 100, .25)`);

  // // if (mouseIsPressed) {
  // //   fill(0);
  // // } else {
  // //   fill(255);
  // // }
  // push();
  // translate(transX, transY);
  // beginShape();
  // vertex(30, 0);
  // vertex(60, 20);
  // vertex(60, 50);
  // vertex(30, 70);
  // vertex(0, 50);
  // vertex(0, 20);
  // endShape(CLOSE);
  // pop();
}
// const canvas = document.getElementsByTagName("canvas")[0];
// canvas?.onmousemove = function (e) {
//   // important: correct mouse position:
//   var rect = this.getBoundingClientRect(),
//     x = e.clientX - rect.left,
//     y = e.clientY - rect.top,
//     i = 0,
//     r;

//   ctx.clearRect(0, 0, canvas.width, canvas.height); // for demo

//   while ((r = rects[i++])) {
//     // add a single rect to path:
//     ctx.beginPath();
//     ctx.rect(r.x, r.y, r.w, r.h);

//     // check if we hover it, fill red, if not fill it blue
//     ctx.fillStyle = ctx.isPointInPath(x, y) ? "red" : "blue";
//     ctx.fill();
//   }
// };
