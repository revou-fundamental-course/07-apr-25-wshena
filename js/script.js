const mobileNav = document.querySelector('#mobile-nav')
const mobileNavOpenButton = document.querySelector('#toggle-menu-open');
const mobileNavCloseButton = document.querySelector('#toggle-menu-close');

const toggleOpenMobileNav = () => {
  mobileNavOpenButton.addEventListener('click', () => {
    mobileNav.classList.add('mobile-nav-active');
  })
};

const toggleCloseMobileNav = () => {
  mobileNavCloseButton.addEventListener('click', () => {
    mobileNav.classList.remove('mobile-nav-active');
  })
};

// function run
toggleOpenMobileNav();
toggleCloseMobileNav();