const { isEmail } = require('validator');

const example1 = 'test@test.com';
const example2 = 'abcDE123';

console.log(isEmail(example1));
console.log(isEmail(example2));
