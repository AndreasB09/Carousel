document.getElementById("next").addEventListener("click", function () {
  changeSlide(1);
});

document.getElementById("previous").addEventListener("click", function () {
  changeSlide(-1);
});

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let currentIndex = 0;

const carousel = document.getElementById("carousel");
const images = document.querySelectorAll("#carousel img");

carousel.addEventListener("mousedown", startDrag);
carousel.addEventListener("mouseup", endDrag);
carousel.addEventListener("mousemove", drag);
carousel.addEventListener("mouseleave", endDrag);

function startDrag(event) {
  isDragging = true;
  startPosition = event.clientX;
  previousTranslate = currentTranslate;
}

function endDrag() {
  isDragging = false;
  const movedBy = currentTranslate - previousTranslate;
  if (movedBy < -100 && currentIndex < images.length - 1) currentIndex += 1;
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

  setPositionByIndex();
}

function drag(event) {
  if (isDragging) {
    const currentPosition = event.clientX;
    currentTranslate = previousTranslate + currentPosition - startPosition;
    setSliderPosition();
  }
}

function changeSlide(direction) {
  currentIndex = -1;
  images.forEach((img, index) => {
    if (img.classList.contains("active")) {
      currentIndex = index;
    }
  });

  images[currentIndex].classList.remove("active");

  let newIndex = (currentIndex + direction + images.length) % images.length;

  images[newIndex].classList.add("active");
}

function setSliderPosition() {
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  previousTranslate = currentTranslate;
  setSliderPosition();
}
