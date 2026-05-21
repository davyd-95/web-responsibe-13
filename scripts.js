let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 5000);