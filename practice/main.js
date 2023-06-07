// Task-1 . maket p red
const members = document.body.querySelector('.members');
const heroes = members.querySelectorAll('p');
heroes.forEach((el) => (el.style.color = 'red'));
console.log(heroes);
const ul = document.body.querySelector('.ul-list');
const allLinks = Array.from(ul.querySelectorAll('a'));
for (let i = 0; i < allLinks.length; i += 2) {
  allLinks[i].style.color = 'red';
}
console.log(allLinks);
for (let link of allLinks) {
  const href = link.getAttribute('href');
  if (!href) continue;
  if (href.startsWith('/')) continue;
  if (href.includes('://')) continue;
  if (href.endsWith('.com')) continue;
  link.style.color = 'red';
}
const isValid = (el) => el.hasAttribute('href');
const isOurs = (el) => !el.getAttribute('href').includes('://');
const isGood = (el) => !el.getAttribute('href').startsWith('/');
const isNone = (el) => !el.getAttribute('href').endsWith('.com');
const setColor = (el) => (el.style.color = 'red');
const trashLinks = allLinks
  .filter(isValid)
  .filter(isOurs)
  .filter(isGood)
  .forEach((el) => (el.style.color = 'red'));
console.log(trashLinks);

//  Final task

function addCard() {
  const root = document.body;
  const wrapper = document.createElement('div');
  const img = document.createElement('img');
  const header = document.createElement('h1');
  const list = document.createElement('ul');
  const button = document.createElement('button');
  // Create li with info
  const liInfo = ['One ring of power', 'Fucker Mordor', "Sam's friend"];
  liInfo.forEach((el) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = el;
    list.appendChild(listItem);
  });

  // Join in body
  wrapper.append(img, header, list, button);
  root.append(wrapper);

  // Fill info
  button.innerText = 'Click me Bro';
  header.innerText = 'Frodo';
  img.src = 'https://i.pinimg.com/564x/13/8d/db/138ddb61018e9b74f7fc4d9e1f1afdb6.jpg';

  // Add class for style
  wrapper.classList.add('wrapper');
  img.classList.add('img');
  list.classList.add('ul');
  button.classList.add('btn');
}

// reproduce cards
for (let i = 0; i < 5; i++) {
  addCard();
}

// Task -4 eamil
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('work');
  const email = document.querySelector('input[name="email"]');
  const password = document.querySelector('input[name="password"]');
  const conPass = document.querySelector('input[name="conPass"]');
  if (!email.value || !conPass.value) {
    alert('Enter your email');
    return;
  }
  if (password.value !== conPass.value) {
    alert('Enter password');
    return;
  }
  alert('Good job');
  email.value = '';
  password.value = '';
  conPass.value = '';
});

// How add post
// const root = document.body;
// data.forEach((el) => {
//   const cardBlock = document.createElement('div');
//   cardBlock.classList.add('wrapper');
//   const userId = document.createElement('h1');
//   const title = document.createElement('h2');
//   const desc = document.createElement('p');
//   userId.textContent = el.id;
//   title.textContent = el.title;
//   desc.textContent = el.body;
//   cardBlock.append(userId, title, desc);
//   root.append(cardBlock);
// });
