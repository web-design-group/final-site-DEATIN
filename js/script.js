const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  menuOverlay.classList.add('open');
  document.body.classList.add('menu-open');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  menuOverlay.classList.remove('open');
  document.body.classList.remove('menu-open');
}

if (burgerBtn) {
  burgerBtn.addEventListener('click', openMobileMenu);
}

if (menuClose) {
  menuClose.addEventListener('click', closeMobileMenu);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});