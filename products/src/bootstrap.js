import faker from 'faker';

const mount = (el) => {
    let products = '';
    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    console.log(products);
    el.innerHTML = products;
}

// When we want to run this Product App in isolation (development mode)
// Then we need to mount our app inside a div
// Otherwise we don't need to.

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        // We are probably running in isolation if el exists
        mount(el);
    }
}

// We also need to export the mount function
// So that Container App can use it to render Product App
export { mount };