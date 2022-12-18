
new Swiper('.projects__nav-slider', {
    slidesPerView: 3.2,
    spaceBetween: 20,
    
    breakpoints: {
        768: {
             slidesPerView: 1.5,
        }
    }
});


const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {

}