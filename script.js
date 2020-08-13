(function () {
  let greens, pinks, blues;

  function map(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  function rgb(r, g, b) {
    return `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)}`;
  }

  function onMouseMove(event) {
    changePinkColors(event);
    changeGreenColors(event);
    changeBlueColors(event);
  }

  // TODO: Refactor into one function
  function changePinkColors(event) {
    let r = map(event.screenX, 0, window.innerWidth, 255, 255);
    let g = map(event.screenX, 0, window.innerWidth, 142, 196);
    let b = map(event.screenX, 0, window.innerWidth, 162, 59);
    let color = rgb(r, g, b);
    pinks.forEach(function (element) {
      element.style.fill = color;
    });
  }

  function changeGreenColors(event) {
    let r = map(event.screenX, 0, window.innerWidth, 14, 255);
    let g = map(event.screenX, 0, window.innerWidth, 149, 165);
    let b = map(event.screenX, 0, window.innerWidth, 94, 0);
    let color = rgb(r, g, b);
    greens.forEach(function (element) {
      element.style.fill = color;
    });
  }

  function changeBlueColors(event) {
    let r = map(event.screenX, 0, window.innerWidth, 72, 232);
    let g = map(event.screenX, 0, window.innerWidth, 178, 72);
    let b = map(event.screenX, 0, window.innerWidth, 232, 185);
    let color = rgb(r, g, b);
    blues.forEach(function (element) {
      element.style.fill = color;
    });
  }

  function init() {
    greens = Array.prototype.slice.call(document.querySelectorAll(".green"));
    pinks = Array.prototype.slice.call(document.querySelectorAll(".pink"));
    blues = Array.prototype.slice.call(document.querySelectorAll(".blue"));
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onMouseMove);
    document.body.addEventListener("touchstart", function (e) {
      e.preventDefault();
    });
  }
  init();
})();
