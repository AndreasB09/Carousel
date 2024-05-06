document.getElementById("next").addEventListener("click", function () {
  changeSlide(1);
});

document.getElementById("previous").addEventListener("click", function () {
  changeSlide(-1);
});

function changeSlide(direction) {
  const images = document.querySelectorAll("#carousel img");
  let currentIndex = -1;
  images.forEach((img, index) => {
    if (img.classList.contains("active")) {
      currentIndex = index;
    }
  });

  images[currentIndex].classList.remove("active");

  let newIndex = (currentIndex + direction + images.length) % images.length;

  images[newIndex].classList.add("active");
}

//mousedrag
let mousedragContainer = document.querySelectorAll(".mousedrag-container");
let itemsContainer = document.querySelector(".items-container");

let pressed = false;
let startX;
let x;

mousedragContainer.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - itemsContainer.offsetLeft;
  mousedragContainer.style.cursor = "grabbing";
})

mousedragContainer.addEventListener("mouseenter", () => {
  mousedragContainer.style.cursor = "grab";
})

mousedragContainer.addEventListener("mouseup", () => {
  mousedragContainer.style.cursor = "grab";
  pressed = false;
})

mousedragContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX;
  itemsContainer.style.left = `${x - startX}px`;
})