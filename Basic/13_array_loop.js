let arr = [1, 2, 3, 4, 5];

// using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// using for of loop
for (let num of arr) {
    console.log(num); // for-of returns element of an array
}

// using for in loop
for (let num in arr) {
    console.log(num); // for-in returns index of an array
}

// using for each loop
arr.forEach((num) => {
    console.log(num); // foreach performs operation on existing element and doesn't return any value
});
