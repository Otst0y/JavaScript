"use strict"

//task 1

const arr = [5, 4, 98, 51, -71, 6, -7, 45, -65, -99, 125, 48, -63, 32, -21, 78, 88, 55, 0, 1];

arr.sort(function(a, b) {
    return a - b;
})
console.log(arr);
console.log(arr.reverse());


//task 2

let filtered1;
let filtered2;

function biggerThanZero(value) {
    return value >= 0;
}
filtered1 = arr.filter(biggerThanZero);
console.log(filtered1);

function lessThanZero(value) {
    return value < 0;
}
filtered2 = arr.filter(lessThanZero);
console.log(filtered2);


//task 3

const arr2 = [];

const student1 = {
    yearOfstudying: 2,
    facultyName: 'History'
};
const student2 = {
    yearOfstudying: 4,
    facultyName: 'Arts'
};
const student3 = {
    yearOfstudying: 3,
    facultyName: 'Commerce'
};
const student4 = {
    yearOfstudying: 5,
    facultyName: 'Economics'
};
const student5 = {
    yearOfstudying: 1,
    facultyName: 'Education'
};
const student6 = {
    yearOfstudying: 6,
    facultyName: 'Engineering'
};
const student7 = {
    yearOfstudying: 1,
    facultyName: 'Biology'
};
const student8 = {
    yearOfstudying: 3,
    facultyName: 'Physics'
};
const student9 = {
    yearOfstudying: 2,
    facultyName: 'Philosophy'
};
const student10 = {
    yearOfstudying: 2,
    facultyName: 'Information Technology'
};

arr2.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);


//3.a

function getFacultyNames(obj) {
    return obj.facultyName;
}

let facultyNames = arr2.map(getFacultyNames);
console.log(facultyNames);


//3.b

function sumOfYears(sum, currentIndex) {
    return sum + currentIndex.yearOfstudying;
}

let result = arr2.reduce(sumOfYears, 0);
console.log(result);