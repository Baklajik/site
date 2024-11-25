let currentSlide = 0;

function updateSlidePosition() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${currentSlide * 100}%)`; 
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length; 
    updateSlidePosition();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    updateSlidePosition();
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlidePosition();
});
