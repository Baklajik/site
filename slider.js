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
    const unsplashApiUrl = 'https://api.unsplash.com/search/photos?query=webcam&client_id=halDdzZ_MgluQo8DJXuETfBcfwVtfIq-EGemmfcFff8';
    fetch(unsplashApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const slidesContainer = document.querySelector('.slides');
            data.results.forEach(photo => {
                const slide = document.createElement('div');
                slide.classList.add('slide');
                const img = document.createElement('img');
                img.src = photo.urls.regular;
                slide.appendChild(img);
                slidesContainer.appendChild(slide);
            });
            updateSlidePosition();
        })
        .catch(error => console.error('Error fetching images:', error));
});