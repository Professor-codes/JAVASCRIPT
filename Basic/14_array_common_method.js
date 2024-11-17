// array to string
let arr = [1, 2, 3, 4, 5];
let str1 = arr.toString();
console.log(str1);
console.log(typeof str1);

// join array using separator
let str2 = arr.join(":");
console.log(str2);

// delete from array
delete arr[0];
console.log(arr.length); // length before delete: 5
console.log(arr); // array length will not affect while using delete method
console.log(arr.length); // length after delete: 5

// concat array
let a = [1, 2, 3];
let b = [4, 5, 6];
let combine = a.concat(b);
console.log(combine);

// sort array
let values = [48, 1, 66, 5, 22, 3];
console.log(values.sort()); // sort an array as per numbering order

let ascending = (a, b) => {
    return a - b;
}
console.log(values.sort(ascending)); // sort an array as per ascending order

let descending = (x, y) => {
    return y - x;
}
console.log(values.sort(descending)); // sort an array as per descending order

// reverse array
let colors = ['red', 'green', 'pink', 'blue', 'magenta'];
console.log(colors.reverse());

// splice
let vehicles = ['car', 'scooter', 'cycle', 'e-bike'];
vehicles.splice(1, 2, 'bus', 'truck');
console.log(vehicles);

// array from
let name = 'Javascript';
name = Array.from(name);
console.log(name); // create an array from object

