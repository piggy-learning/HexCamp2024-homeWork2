const swiper = new Swiper('.swiper', {
  loop: true,
  grid: {
    rows: 3,
  },
  breakpoints: {
    768: {
      grid: {
        rows: 1,
      },
      slidesPerView: 3,
      spaceBetween: 24, 
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});