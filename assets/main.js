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

let testimonialSwiper = new Swiper('.testimonial-swiper', {
  spaceBetween: 30,
  loop: 'true',
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let projectsSwiper = new Swiper('.projects-swiper', {
  spaceBetween: 20,
  // loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: 'true',
  // freeMode: 'true',

  breakpoints: {
    // 0: {
    //   centeredSlides: 'true',
    // },

    576: {
      slidesPerView: 1.75,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2.5,
      centeredSlides: false,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 1.5,
      // slidesPerView: 1.25,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});

// const how1 = document.getElementById('how1');
// const how2 = document.getElementById('how2');
// const how3 = document.getElementById('how3');

// how1.addEventListener('click', changeImage(this));

// const changeImage = (img) => {};

// onclick='changeImage(this);

// function changeImage(img) {
//   document.getElementById("img").src = img.src.replace("_t", "_b");
// }

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
