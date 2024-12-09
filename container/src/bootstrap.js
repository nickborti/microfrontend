import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cartProject/CartShow';

console.log('container');

productMount(document.querySelector('#product-app'));
cartMount(document.querySelector('#cart-app'));