//  Menu variables
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLink = document.querySelectorAll('.nav__link');

//  Open and close menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('open-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('open-menu');
  });
}

//  Remove Menu
const linkClick = () => {
  navMenu.classList.remove('open-menu');
};
navLink.forEach((link) => link.addEventListener('click', linkClick));

//  Change navMenu text color
// if (screen.width >= 767) {
//   navLink.forEach((link) => link.classList.add)
// }

//  Change header background
const changeHeader = () => {
  const header = document.getElementById('header');
  const navHeaderItem = document.querySelectorAll('.nav__header-item');

  if (scrollY >= 50) {
    header.classList.add('change-header');

    navHeaderItem.forEach((item) => item.classList.add('nav-color'));
    navLink.forEach((link) => link.classList.remove('nav-color-alt'));
    navLink.forEach((link) => link.classList.add('nav-color'));
  } else {
    header.classList.remove('change-header');
    navHeaderItem.forEach((item) => item.classList.remove('nav-color'));
    navLink.forEach((link) => link.classList.add('nav-color-alt'));
    navLink.forEach((link) => link.classList.remove('nav-color'));
  }
};

window.addEventListener('scroll', changeHeader);

// let stepsSwiper = new Swiper('.benefits-swiper', {
//   spaceBetween: 20,
//   slidesPerView: 1.2,
//   centeredSlides: false,
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     // hide: true,
//     dragSize: '200px',
//   },

//   // pagination: {
//   //   el: '.swiper-pagination',
//   //   type: 'progressbar',
//   // },

//   breakpoints: {
//     // 0: {
//     //   centeredSlides: 'true',
//     // },

//     576: {
//       slidesPerView: 2.2,
//       centeredSlides: false,
//     },
//     768: {
//       slidesPerView: 2.5,
//       centeredSlides: false,
//     },
//     1024: {
//       spaceBetween: 30,
//       slidesPerView: 3,
//       centeredSlides: false,
//     },
//   },

//   // pagination: {
//   //   el: '.swiper-pagination',
//   //   clickable: true,
//   // },
// });
