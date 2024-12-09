import faker from 'faker';
console.log('This is cart');

const mount = (el) => {
    const cartText = `You have ${faker.random.number()} items in your cart`;
    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#cart-dev');
    if (el) {
        mount(el);
    }
}

export { mount }