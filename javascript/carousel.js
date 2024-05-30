let slideIndex = 1;
changeSlides(slideIndex);

function plusSlides(n) {
  changeSlides((slideIndex += n));
}

function currentSlide(n) {
  changeSlides((slideIndex = n));
}

function changeSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
