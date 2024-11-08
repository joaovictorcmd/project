const swiper = new Swiper(".swiper-container", {
  grabCursor: true,
  slidesPerView: 1.2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20,
      loop: false,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
  },
});

function adjustNavigationVisibility() {
  const prevButton = document.querySelector(".swiper-button-prev");
  const nextButton = document.querySelector(".swiper-button-next");

  if (window.innerWidth >= 640) {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
  } else {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  }
}

adjustNavigationVisibility();
window.addEventListener("resize", adjustNavigationVisibility);
