// Task-1
const btn = document.body.querySelector('.show-modal');
const modal = document.body.querySelector('.modal-window');
const layout = document.body.querySelector('.layout');
const bodyColor = document.body;

btn.addEventListener('click', () => {
  if (modal.classList.contains('show')) {
    layout.classList.remove('bg');
    modal.classList.remove('show');
    return;
  }
  modal.classList.add('show');
  layout.classList.add('bg');
});

//Task-2
const formBtn = document.body.querySelector('.btn-form');
const texInput = document.body.querySelector('.text-input');
const form = document.body.querySelector('form');
formBtn.addEventListener('click', () => {
  switch (texInput.value) {
    case 'red':
      bodyColor.style.backgroundColor = 'red';
      break;
    case 'blue':
      bodyColor.style.backgroundColor = 'blue';
      break;
    case 'white':
      bodyColor.style.backgroundColor = 'white';
      break;
    case 'black':
      bodyColor.style.backgroundColor = 'black';
      break;
    case 'green':
      bodyColor.style.backgroundColor = 'green';
      break;
    default:
      alert(`Wrong ${texInput.value} is not color.Please enter correct color`);
  }
});

// Task-3
const bntNumber = document.body.querySelector('.btn-number');
const numberForm = document.body.querySelector('.text-input__numbers');
bntNumber.addEventListener('click', () => {
  const inputValue = numberForm.value;
  const regex = /^(\d+:)*\d+$/;
  if (regex.test(inputValue)) {
    const sum = inputValue
      .split(':')
      .map((el) => Number(el))
      .reduce((acc, num) => acc + num, 0);
    const average = sum / inputValue.split(':').length;
    alert(`Average number is ${average}`);
  } else {
    alert('Enter correct input!!! ');
  }
});
