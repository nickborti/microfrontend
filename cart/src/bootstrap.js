import faker from 'faker';
console.log('This is cart');
const cartText = `You have ${faker.random.number()} items in your cart`;
document.querySelector('#cart-dev').innerHTML = cartText;