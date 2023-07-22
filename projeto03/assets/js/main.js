const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");


menu.addEventListener("click", () => 
nav.classList.toggle("active"));

var swiper = new Swiper(".swiper", {   
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });