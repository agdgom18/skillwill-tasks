// Task - 1;
const btn = document.body.querySelector('#btn__main');
const text = document.body.querySelector('#text___desc');
btn.addEventListener('click', () => {
  console.log('Hiiii');
  text.style.display = 'none';
});
// Task-2
const card = document.createElement('div');
card.innerHTML = `
<h2> Gandalf </h2>
<a href = '#'> Go to profile </a>
`;
document.body.append(card);

// Task-3

const start = document.body.querySelector('btn__start');
const score = document.body.querySelector('.score');
let total = 0;
document.addEventListener('click', ({ target }) => {
  if (target.parentNode.classList.contains('first-question-block')) {
    if (target.classList.contains('correct')) {
      target.style.backgroundColor = 'green';
      target.setAttribute('disabled', true);
      total++;
      score.innerText = total;
    } else {
      target.style.backgroundColor = 'red';
    }
  }
  if (target.parentNode.classList.contains('second-question-block')) {
    if (target.classList.contains('correct')) {
      target.style.backgroundColor = 'green';
      target.setAttribute('disabled', true);
      total++;
      score.innerText = total;
    } else {
      target.style.backgroundColor = 'red';
    }
  }
});
