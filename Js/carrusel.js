//Carrusel Header
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
let currentIndex = 0;


function updateCarousel() {
    const offset = -currentIndex * slides[0].clientWidth;
    track.style.transform = `translateX(${offset}px)`;
}


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});


setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 3000);

document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type        : 'loop',
        perPage     : 3,  
        perMove     : 1,
        autoplay    : true,
        interval    : 3000,
        pauseOnHover: true,
        arrows      : true,
        pagination  : true,
        breakpoints : {
            980: { pagination: false },  // Escritorio grande
            740: { perPage: 2},  // Escritorio grande
            510: { perPage: 1,arrows: false,},
        },
    }).mount();
});

