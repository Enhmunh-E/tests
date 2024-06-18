// document.onmousemove = (e) => {
//   const left = window.innerWidth / 2 - e.clientX;
//   const top = window.innerHeight / 2 - e.clientY;
//   document.getElementById("card").style.backgroundPosition = `${left * 0.1}px ${
//     top * 0.1
//   }px`;
// };
const subtitle = document.getElementsByClassName("card-subtitle")[0];
const createWord = (text, index) => {
  const word = document.createElement("span");
  word.innerHTML = `${text} `;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
};
const addWord = (word, index) => subtitle.appendChild(createWord(word, index));
const createSubtitle = (text) => text.split(" ").map(addWord);

createSubtitle("But in a much more real sense, I have no idea what I'm doing.");
