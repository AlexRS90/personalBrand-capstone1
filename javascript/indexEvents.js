const mobileBurger = document.querySelectorAll('.burger');
const mobileMenu = document.querySelector('#mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');

function check() {
    mobileMenu.classList.toggle('menu-hidden');
}
console.log("Pumas");


mobileBurger.forEach((item) => {
    item.addEventListener('click', check);
    console.log("Hello");
});

menuItem.forEach((item) => {
  item.addEventListener('click', check);
});

