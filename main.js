const inventors = [
    'Albert Einstein',
    'Issac Newton',
    'Galileo Galilei',
    'Marie Curie',
    'Johannes Kepler',
    'Nicolaus Copernicus',
    'Max Planck',
    'Katherine Blodgett',
    'Ada Lovelace',
    'Sarah E. Goode',
    'Lise Meitner',
    'Hanna Hammarstrom'
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
let resultArr;

// Print out an array of the inventors whose name starts with 'A'.
resultArr = inventors.filter((item) => {
    return item.startsWith('A');
});

// Print out an array of the inventors whose name contains 'n'.
resultArr = inventors.filter((item) => {
    return item.indexOf('n') > -1;
});

// Bonus: print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
resultArr = inventors.filter((item) => {
    let stringArr = item.split("");
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] == stringArr[i + 1])
            return item;
    }
});

// Print out an array of the numbers which are odd.
resultArr = numbers.filter((num) => {
    return num % 2 == 1;
});

// Print out an array of the numbers that have two digits.
resultArr = numbers.filter((num) => {
    return num >= 10 && num < 100
});

// Bonus: print out an array of the numbers which are prime.
resultArr = numbers.filter((num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
});

// * Print out an array of all the inventors' names in uppercase.
resultArr = inventors.map((inv) => {
    return inv.toUpperCase();
});

// Print out an array of all the first names of each inventor.
resultArr = inventors.map((inv) => {
    return inv.split(" ", 1);
});

// rint out an array of the length of every name.
resultArr = inventors.map((inv) => {
    return inv.length;
});

// Print out an array of every number multiplied by 100.
resultArr = numbers.map((num) => {
    return num * 100;
});

// * Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).
resultArr = numbers.map((num) => {
    return num * 2;
});

// Sort all the inventors in alphabetical order, A-Z.
resultArr = inventors.sort();

// Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
resultArr = inventors.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    if (a = b) return 0;

});


// Sort all the inventors by length of name, shortest name first.
resultArr = inventors.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if (a.length = b.length) return 0;
});

// * Sort all the inventors by length of name, longest name first. Do not use the reverse method.
resultArr = inventors.sort((a, b) => {
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    if (a.length = b.length) return 0;
});

// Sort all the numbers
resultArr = inventors.sort((a, b) => {
    return b - a;
});

//Sort the numbers until you see the following: [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9].
resultArr = numbers.sort();

// Find the sum of all the numbers.
resultArr = numbers.reduce((total, num) => {
    return total + num;
});

// Find the sum of all the even numbers.
resultArr = numbers.reduce((total, num) => {
    if (num % 2 === 0)
        return total + num;
    return total;

}, 0);

// Create a string that has the first name of every inventor.
resultArr = inventors.sort().reduce((string, item) => {
    return string + item.split(" ", 1);

}, "");

// Does any inventor have the letter 'y' in their name?
resultArr = inventors.some((inv) => {
    return inv.search('y') > -1;
});

//Does every inventor have the letter 'e' in their name?
resultArr = inventors.every((inv) => {
    return inv.search('e') > -1;
});
// console.log(inventors);
// Does every inventor have first name that's longer than 4 characters?
resultArr = inventors.every((inv) => {
    return inv.split(" ")[0].length > 4;
});


// Find the inventor that has a middle name.
resultArr = inventors.find((inv) => {
    return inv.split(" ").length > 2;
});

// Bonus: Return a new array without inventor with a middle name.
resultArr = inventors.filter((inv) => {
    return inv.split(" ").length == 2;
});
let fib = function (nth) {
    let result_arr = [];
    let nextNum = 0;
    for (let i = 0; i < nth; i++) {
        if (result_arr.length > 1)
            nextNum = result_arr[i - 1] + result_arr[i - 2];
        else
            nextNum = i;
        result_arr.push(nextNum);
    }
    return result_arr;
}
