// 🔹 Hero Slider
var heroSwiper = new Swiper(".heroSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
  navigation: {
    nextEl: ".heroSwiper .swiper-button-next",
    prevEl: ".heroSwiper .swiper-button-prev",
  },
});

// 🔹 Category Slider
var categorySwiper = new Swiper(".categorySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".categorySwiper .swiper-button-next",
    prevEl: ".categorySwiper .swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
});
