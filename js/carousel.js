let idx = 0;
const slides = document.querySelectorAll('.carousel img');

function moveSlide(step){
  slides[idx].classList.remove('active');
  idx = (idx + step + slides.length) % slides.length;
  slides[idx].classList.add('active');
}