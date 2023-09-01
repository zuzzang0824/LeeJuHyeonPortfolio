new Swiper(".swiper", {
  autoplay: {
    delay: 2500,
  },
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1025: { slidesPerView: 3 },
  },
});
