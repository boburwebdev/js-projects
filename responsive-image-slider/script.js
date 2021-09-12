const slides = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('#prev');
const btnNext = document.querySelector('#next');
const auto = false;
const intervalTime = 5000;
let slideInterval;


const prevSlide = () => {
    const activeSlide = document.querySelector('.active-slide');

    activeSlide.classList.remove('active-slide');

    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('active-slide');
    } else {
        slides[slides.length-1].classList.add('active-slide');
    }
}

const nextSlide = () => {
    const activeSlide = document.querySelector('.active-slide');

    activeSlide.classList.remove('active-slide');

    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add('active-slide');
    } else {
        slides[0].classList.add('active-slide');
    }
}

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide)