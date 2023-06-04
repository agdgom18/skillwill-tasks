function mySetTimeout(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

function makeToys() {
  return new Promise((resolve, reject) => {
    if (Math.random() * 6 > 3) {
      resolve('Undefected');
    }
    reject('Undefected');
  });
}

function sellToys(status) {
  return new Promise((resolve, reject) => {
    if (status === 'Undefected') {
      if (Math.random() > 0.7) {
        resolve('Toy has been');
      } else {
        reject('Toy was unsuccessful');
      }
    }
  });
}
function deliverToys() {
  return new Promise((resolve, reject) => {
    if (Math.random() * 6 > 3) {
      resolve('Undefected');
    }
    reject('Undefected');
  });
}
mySetTimeout(3).then(() => {
  makeToys()
    .then((status) => {
      mySetTimeout(2).then(() =>
        sellToys(status)
          .then((res) => console.log(res))
          .then(() => deliverToys().then((res) => console.log(res)))
          .catch((error) => console.log(error)),
      );
    })
    .catch((error) => console.log(error));
});
