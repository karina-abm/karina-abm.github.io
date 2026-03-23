document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const body = document.body;
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navbar = document.querySelector('#navbar');

  if (mobileNavToggle && navbar) {
    mobileNavToggle.addEventListener('click', function () {
      navbar.classList.toggle('navbar-mobile');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });

    document.querySelectorAll('#navbar a').forEach(navLink => {
      navLink.addEventListener('click', () => {
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          mobileNavToggle.classList.add('bi-list');
          mobileNavToggle.classList.remove('bi-x');
        }
      });
    });
  }

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox'
    });
  }

  if (typeof Swiper !== 'undefined') {
    const swiperElements = document.querySelectorAll('.swiper');
    swiperElements.forEach((el) => {
      new Swiper(el, {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true
        },
        navigation: {
          nextEl: el.querySelector('.swiper-button-next'),
          prevEl: el.querySelector('.swiper-button-prev')
        }
      });
    });
  }
});