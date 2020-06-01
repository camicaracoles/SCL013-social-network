// Función Slider inicio
let slideIndex = 0;

const showSlides = () => {
  const slides = document.getElementsByClassName('carrusel');
  const dots = document.getElementsByClassName('dot');
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slideIndex += 1;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 7000);
};

showSlides();
