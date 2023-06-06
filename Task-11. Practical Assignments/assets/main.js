// Task-1;
function expo(a, b, c) {
  if (b === 0) return 1;
  return a * expo(a, b - 1);
}

// Task-2
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => res.json())
//   .then((res) => console.log(res));

async function getFetch() {
  try {
    const rawData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await rawData.json();
    console.log(data);
  } catch (error) {}
}

getFetch();
