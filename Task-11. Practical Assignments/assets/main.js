// Task - 1;
function expo(a, b, c) {
  if (b === 0) return 1;
  return a * expo(a, b - 1);
}

// Task - 2;
async function getFetch() {
  try {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
    return data;
  } catch (error) {
    return console.error(error);
  }
}
//  Task-3
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}
async function asyncFnDeepCopy(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== 'object') {
      reject('ERRRRRROOOOR');
    }
    const copy = deepCopy(obj);
    resolve(copy);
  });
}
async function fn() {
  const data = await asyncFnDeepCopy(await getFetch());
  console.log(data);
}
fn();
