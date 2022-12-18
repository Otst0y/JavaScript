"use strict"
let admin;
let name = "John";

admin = name;
console.log(admin);

let login = "Admin";
let password = "TheMaster";

if (login == "Admin") {
    console.log("Password?");
    if (password == "TheMaster") {
        console.log("Welcome!");
    } else if (password == "Cancel") {
        console.log("Canceled.");
    } else {
        console.log("Wrong password.");
    }
} else if (login == "Cancel") {
    console.log("Canceled.");
} else {
    console.log("I don't know you.");
}

console.log("");

switch (login) {
    case "Admin": {
        console.log("Password?");
        switch (password) {
            case "TheMaster": {
                console.log("Welcome!");
            } break;

            case "Cancel": {
                console.log("Canceled.");
            } break;

            default: {
                console.log("Wrong password.");
            }
        }
    } break;

    case "Cancel": {
        console.log("Canceled.");
    } break;
    
    default: {
        console.log("I don't know you.");
    }
}

