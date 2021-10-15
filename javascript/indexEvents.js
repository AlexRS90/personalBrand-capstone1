const races = [{
  title: 'The Bravest Race',
  subTitle: 'Beat the four elements',
  info: 'This race was on september 15 2017<br>5k race with obstacles.',
  image: './images/dinamic1.png',
  altMsg: 'Bravest race image',
},
{
  title: 'The Death Path',
  subTitle: 'Run around orange fields',
  info: 'My favorite race ever<br>And amazing race with <br>beautiful scenarios.',
  image: './images/dinamic2.png',
  altMsg: 'The death path image',
},
{
  title: 'Xalapa Half',
  subTitle: 'First long distance race',
  info: 'My first half marathon, 21 km <br>around my city.',
  image: './images/dinamic3.png',
  altMsg: 'Xalapa half marathon image',
},
{
  title: 'Gatorade 15K',
  subTitle: 'Join more than 5k runners',
  info: 'Amazing race in the Chapultepec Park<br> at CDMX',
  image: './images/dinamic4.png',
  altMsg: 'Gatorade 15k image',
},
{
  title: 'Break Stone Trail',
  subTitle: 'Run in water falls',
  info: 'The most incredible trail race with<br> a lot of water falls<br> and cross rivers.',
  image: './images/dinamic5.png',
  altMsg: 'Break stone image',
},
{
  title: 'Berlin Marathon',
  subTitle: 'Race to the gate',
  info: 'The fastest marathon<br> I ran it 2 years ago on<br> september 29 2019',
  image: './images/dinamic6.png',
  altMsg: 'Berlin Marathon image',
}];

let cards = '';
let index = 1;
races.forEach((raceInfo) => {
  cards += `<div class="dinamically hidden${index} d-flex" id="id-hidden${index}">
  <img src="${raceInfo.image}" alt="${raceInfo.altMsg}">
  <div class="cards-info d-flex">
      <h4>${raceInfo.title}</h4>
      <p class="race-slogan">${raceInfo.subTitle}</p>
      <p class="race-info">${raceInfo.info}</p>
  </div>
</div> `;
  index += 1;
});
document.querySelector('.races').innerHTML += cards;
document.querySelector('.races').innerHTML += `<button class="highlight-button-less">LESS</button>`;
document.querySelector('.races').innerHTML += `<button class="highlight-button">MORE</button>`;

const mobileBurger = document.querySelectorAll('.burger');
const mobileMenu = document.querySelector('#mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');
const moreButton = document.querySelector('.highlight-button');
const cardInfo3 = document.querySelector('#id-hidden3');
const cardInfo4 = document.querySelector('#id-hidden4');
const cardInfo5 = document.querySelector('#id-hidden5');
const cardInfo6 = document.querySelector('#id-hidden6');
const lessButton = document.querySelector('.highlight-button-less');

function showMore() {
  cardInfo3.classList.toggle('hidden3');
  cardInfo4.classList.toggle('hidden4');
  cardInfo5.classList.toggle('hidden5');
  cardInfo6.classList.toggle('hidden6');
  moreButton.style.display = 'none';
  lessButton.style.display = 'block';
}

function showLess() {
  cardInfo3.classList.toggle('hidden3');
  cardInfo4.classList.toggle('hidden4');
  cardInfo5.classList.toggle('hidden5');
  cardInfo6.classList.toggle('hidden6');
  moreButton.style.display = 'block';
  lessButton.style.display = 'none';
}

moreButton.addEventListener('click', showMore);
lessButton.addEventListener('click', showLess);

function check() {
  mobileMenu.classList.toggle('menu-hidden');
}

mobileBurger.forEach((item) => {
  item.addEventListener('click', check);
});

menuItem.forEach((item) => {
  item.addEventListener('click', check);
});