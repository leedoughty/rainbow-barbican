const greens = document.querySelectorAll(".green");
const pinks = document.querySelectorAll(".pink");
const blues = document.querySelectorAll(".blue");

function map(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function generateRgbValue(r, g, b) {
  return `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)}`;
}

function changeColours(
  event,
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour6,
  elementToChange
) {
  const r = map(
    event.screenX ?? event.touches[0].clientX,
    0,
    window.innerWidth,
    colour1,
    colour2
  );
  const g = map(
    event.screenX ?? event.touches[0].clientX,
    0,
    window.innerWidth,
    colour3,
    colour4
  );
  const b = map(
    event.screenX ?? event.touches[0].clientX,
    0,
    window.innerWidth,
    colour5,
    colour6
  );
  const colour = generateRgbValue(r, g, b);
  elementToChange.forEach((element) => {
    element.style.fill = colour;
  });
}

function onMouseMove(event) {
  changeColours(event, 14, 255, 149, 165, 94, 0, greens);
  changeColours(event, 255, 255, 142, 196, 162, 59, pinks);
  changeColours(event, 72, 232, 178, 72, 232, 185, blues);
}

window.addEventListener("mousemove", onMouseMove);
window.addEventListener("touchmove", onMouseMove);
