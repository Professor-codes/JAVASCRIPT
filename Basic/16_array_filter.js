// let oddEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = oddEven.filter((even) => {
//     return (even % 2 == 0) && (even > 5);
// })
// console.log(even);

let books = [{title: 'book one', genre: 'history', publish: 1930, edition: 1984}, {
    title: 'book two',
    genre: 'math',
    publish: 1898,
    edition: 1944
}, {title: 'book three', genre: 'science', publish: 1952, edition: 2004}, {
    title: 'book four',
    genre: 'science',
    publish: 1973,
    edition: 2005
}, {title: 'book five', genre: 'history', publish: 2001, edition: 2017}];

let filterBooks = books.filter((book) => {
    // filter by title
    return book.title === 'book five' || book.title === 'book four';
});
console.log(filterBooks);

filterBooks = books.filter((book) => {
    //filter by genre
    return book.genre === 'history' && book.publish >= 1900;
});
console.log(filterBooks);





