// importin module
// import { addToCart, totalPrice as price, totalQuantity } from "./shoppingCart.js";

console.log('importing module');

// addToCart('bread', 3);
// console.log(price , totalQuantity);

// import * as ShoppingCart from "./shoppingCart.js";

// ShoppingCart.addToCart('bread', 10);
// ShoppingCart.totalPrice
// console.log(ShoppingCart.totalPrice);

import add, {cart } from './shoppingCart.js'

// add('pizza', 4);
// add('apple', 4);
// add('eggs', 4);

// console.log(cart);
// console.log('start fetching');
//  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//  const data = await res.json();

//  console.log(data);
//  console.log('something');

// const getLasrPost = async function(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//  const data = await res.json();
//  const last = data.at(-1)
//  return {title: last.title, text: last.body }
// }

// const lastPost = getLasrPost();//return a promise
// console.log(lastPost);
// // lastPost.then(res => console.log(res))
// const lastpost2 = await getLasrPost()// here we use top level await
// console.log(lastpost2);


// const shoppingCart2 = (function(){
//   const shippingCost = 10;
//   const cart =[];
//   const totalPrice = 237;
//   const totalQuantity = 23

//   const addToCart = function(product, quantity){
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart`); 
//   };

//   const orderStock = function(product, quantity){
  
//   console.log(`${quantity} ${product} orderd from supplier`); 
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity
//   }  
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);
// console.log(shoppingCart2);
// console.log(shoppingCart2.shippingCost);

// export
addToCart = function(product, quantity){
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`); 
};
