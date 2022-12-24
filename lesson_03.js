"use strict"

//task 1

let product = [];       
let lastElement = product[product.length-1];    


//task 2

let styles = ["Jazz", "Blues"];     
styles.push("Rock-n-Roll");
styles.splice(-2, 1, "Classic");
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);


//task 3

function find(arr, value) {             
    console.log(arr.indexOf(value));
}
find();


//task 4

function filterRange(array, a, b) {
    const result = array.slice(a, b);
    console.log(result);
}
filterRange();
