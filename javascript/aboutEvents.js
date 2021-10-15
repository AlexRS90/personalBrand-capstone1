const mobileBurger = document.querySelectorAll('.burger');
const mobileMenu = document.querySelector('#mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');

function check() {
  mobileMenu.classList.toggle('open');
}

mobileBurger.forEach((item) => {
  item.addEventListener('click', check);
});

menuItem.forEach((item) => {
  item.addEventListener('click', check);
});