// global var
let formData;
let username;

// username display
const usernameDisplay = document.querySelector('#user-name-display');
console.log(usernameDisplay)
// name input
const usernameForm    = document.querySelector('#username-form');
const userNameInput   = document.querySelector('.name-input');
const nameOverlay     = document.querySelector('.name-input-overlay');

usernameForm.addEventListener('submit', (e) => {
  e.preventDefault();

  username = userNameInput.value.trim();

  if (username === '') {
    return;
  }

  usernameDisplay.textContent = username;

  setBodyScrollLock(false);
  nameOverlay.classList.add('hide');

  console.log('Username:', username);
});

// fungsi untuk toggle scroll lock
function setBodyScrollLock(lock) {
  document.body.style.overflow = lock ? 'hidden' : '';
}

setBodyScrollLock(true);

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
  window.alert(JSON.stringify(formData))
  form.reset();
}

// mobile nav menu
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavOpenButton = document.querySelector('#toggle-menu-open');
const mobileNavCloseButton = document.querySelector('#toggle-menu-close');
const mobileLinks = document.querySelectorAll('#mobile-nav-link'); // atau querySelectorAll kalau banyak

// buka nav
mobileNavOpenButton.addEventListener('click', () => {
  mobileNav.classList.add('mobile-nav-active');
});

// fungsi close nav
const closeMobileNav = () => {
  mobileNav.classList.remove('mobile-nav-active');
};

// close via tombol “X”
mobileNavCloseButton.addEventListener('click', closeMobileNav);

// close via link
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

form.addEventListener('submit', handleSubmitForm);

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