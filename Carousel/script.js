const slides = document.querySelectorAll('.carousel-slide');

let index = 0;
const slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}
