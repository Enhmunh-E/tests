const container = document.getElementById("container");
const shapes = [
  {
    color: "#FFFFFF",
    shape: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  },
];

const shapeLength = 1;
const rows = 20,
  cols = 10;
let plane = new Array(rows).fill(null).map(() => new Array(cols).fill(null));

const generateShape = () => {
  return shapes[Math.floor(Math.random() * shapes.length)];
};

let currentShape = null;

const draw = () => {
  container.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const node = document.createElement("div");
      if (plane[i][j] != null) {
        node.style.backgroundColor = plane[i][j].color;
      }
      node.className = "node";
      container.append(node);
    }
  }
};

const drop = () => {
  console.log(currentShape);
  currentShape.shape.forEach(([x, y]) => {
    plane[x][y] = null;
  });
  currentShape.shape = currentShape.shape.map(([x, y]) => {
    if (x + 1 == rows) {
      currentShape = null;
      return;
    }
    plane[x + 1][y] = {
      color: currentShape.color,
    };
    return [x + 1, y];
  });
};

const interval = setInterval(() => {
  if (currentShape == null) {
    currentShape = generateShape();
  }
  drop();
  draw();
}, 200);

const onKeyDown = (e) => {
  console.log(e);
};

window.addEventListener("keydown", (e) => {
  const moves = {
    d: [0, 1],
    s: [1, 0],
    a: [0, -1],
  };

  if (moves[e.key]) {
    console.log(moves[e.key]);
    currentShape.shape = currentShape.shape.map(([x, y]) => {
      return [x + moves[e.key][0], y + moves[e.key][1]];
    });
  }
});
