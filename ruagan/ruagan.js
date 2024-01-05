const colours = ["#E4E400", "#a8140e", "#4315aa", "#359d09", "#8f4762"];

window.addEventListener("mousedown", (e) => {
  const colour = colours.shift();
  document.documentElement.style.setProperty("--highlight-color", colour);
  colors.push(colour);
});