// arr.reduce( (previousValue, currentValue) => {
//      return previousValue + currentValue;
// }, initialValue);
// initialValue is used by previousValue for first time only

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumOfArr = arr.reduce((prev, curr) => {
    return prev + curr;
}, 0);
console.log(sumOfArr); // 55

let shoppingCart = [
    {
        item: 't-shirt',
        price: 1999,
    },
    {
        item: 'summer-cap',
        price: 399,
    },
    {
        item: 'jeans',
        price: 3199,
    },
    {
        item: 'shirt',
        price: 1599
    },
];
let cartTotal = shoppingCart.reduce((previousValue, item) => {
    console.log(`${item.item} : ${item.price}`);
    return previousValue + item.price
}, 0);
console.log(`Payment to pay : ${cartTotal}`);