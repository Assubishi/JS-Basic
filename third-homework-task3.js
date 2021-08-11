'use strict'
const items = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

items.forEach(function (product) {
    product.price = product.price * 0.85;
});
console.log(items);