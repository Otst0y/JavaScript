"use strict"

const user = {};            //first task
user.name = "ПИЛИП";
user.surname = "ШЕВЧЕНКО";
user.name = "СЕРГІЙ";
delete user.name;       


const employeeSalaries = {  //second task
    John: 1050,
    Mary: 2100,
    Alex: 850,
    Sam: 450,
    Peter: 1600
};

let sum = 0;
let isEmpty = Object.keys(employeeSalaries).length;
if (isEmpty != 0) {
    for (const key in employeeSalaries) {
        sum += employeeSalaries[key];
    }
    console.log(sum);
}else {
    console.log("Result is 0.");
}                               






