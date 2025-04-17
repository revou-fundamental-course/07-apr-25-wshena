// global var
var formData; 

// autoslide
document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.slide');
  const slides = Array.from(slide.children);
  const slideCount = slides.length;

  // Clone konten untuk efek infinite
  slides.forEach(item => {
    slide.appendChild(item.cloneNode(true));
  });

  // Hitung lebar "setengah" konten (original)
  const halfWidth = slide.scrollWidth / 2;

  let pos = 0;
  const speed = 1;

  function loop() {
    // geser ke kiri
    pos += speed;
    // ketika sudah geser sejauh halfWidth, reset ke 0
    if (pos >= halfWidth) {
      pos = 0;
    }
    slide.style.transform = `translateX(-${pos}px)`;
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
});

// alert
const alert = document.querySelector('#alert');
const alertContainer = document.querySelector('.alert-container');

const autoRemoveAlert = (timeout) => {
  setTimeout(() => {
    const computedTransform = getComputedStyle(alertContainer).transform;
    if (computedTransform.includes('0, 350)')) { // Contoh pengecekan sederhana
      alertContainer.style.transform = 'translateY(-1000px)';
    }
  }, timeout);
}

// form
const form = document.querySelector('#form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// handle form submit function
const handleSubmitForm = (e) => {
  e.preventDefault();

  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const email = emailInput.value
  const message = messageInput.value

  if (!firstName || !lastName || !email || !message) {
    alert.innerText = 'Mohon isi semua field pada form';
    alertContainer.style.transform = 'translateY(350px)'
    autoRemoveAlert(4000);
    return;
  }

  formData = {
    firstName,
    lastName,
    email,
    message
  };

  console.log('Data Form:', formData);
  form.reset();
}

// mobile nav menu
const mobileNav = document.querySelector('#mobile-nav')
const mobileNavOpenButton = document.querySelector('#toggle-menu-open');
const mobileNavCloseButton = document.querySelector('#toggle-menu-close');

// mobile nav function
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
form.addEventListener('submit', handleSubmitForm);