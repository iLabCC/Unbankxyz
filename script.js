const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pagination = document.querySelector('.pagination');

let slideIndex = 0; 

// Create and add pagination dots
function createPagination() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        dot.dataset.index = i;
        dot.addEventListener('click', (e) => {
            slideIndex = e.target.dataset.index; 
            updateSlide();
        });
        pagination.appendChild(dot);
    } 
} 

// Move slide forward
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlide();
}

// Move slide backward
function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlide();
}