const root = document.body;

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const img = document.createElement('img');
img.classList.add('img');
img.src = 'https://i.pinimg.com/564x/13/8d/db/138ddb61018e9b74f7fc4d9e1f1afdb6.jpg';

const h1 = document.createElement('h1');
h1.innerText = 'Froddo Baggins';

const button = document.createElement('button');
button.innerText = 'Button';
button.classList.add('btn');

const ul = document.createElement('ul');
ul.classList.add('ul');
['One ring oof power', 'Elvish robe of stealth', 'Sting dagger of bilbo'].forEach((el) => {
  const li = document.createElement('li');
  li.innerText = el;
  ul.appendChild(li);
});

wrapper.append(img, h1, ul, button);
root.append(wrapper);
