let values = [10, 20, 30, 40, 50];

let updateValues = values
    .map((value) => value * 2) // [20, 40, 60, 80, 100]
    .map((value) => value / 2) // [10, 20, 30, 40, 50]
    .filter((value) => value > 30); // [40, 50]
console.log(updateValues);

