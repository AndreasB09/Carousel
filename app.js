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
