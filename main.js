document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let fire = document.createElement("span");

  let x = e.offsetX;
  let y = e.offsetY;

  fire.style.left = x + "px";
  fire.style.top = y + "px";

  let size = Math.random() * 50;
  fire.style.width = 40 + size + "px";
  fire.style.height = 40 + size + "px";

  body.appendChild(fire);

  setTimeout(function () {
    fire.remove();
  }, 5000);
});
