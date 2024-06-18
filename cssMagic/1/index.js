const blob = document.getElementById("blob");
document.body.onmousemove = (event) => {
  const { clientX, clientY } = event;
  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    {
      duration: 3000,
      fill: "forwards",
    }
  );
};
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("h1").onmouseover = (event) => {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((_, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iterations > event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  }, 30);
};
