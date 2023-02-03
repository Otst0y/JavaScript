'use strict'

//functional
function Robot() {
    this.work = function() {
        console.log("I'm Robot - I'm just working.");
    } 
}

function CoffeRobot() {
    Robot.call(this);
    this.work = function() {
        console.log("I'm CoffeeRobot - I'm just making coffee.");
    }
}

function RobotDancer() {
    Robot.call(this);
    this.work = function() {
        console.log("I'm RobotDancer - I'm just dancing.");
    }
}

function RobotCooker() {
    Robot.call(this);
    this.work = function() {
        console.log("I'm RobotCooker - I'm just cooking.");
    }
}

let robot = new Robot();
let coffeeRobot = new CoffeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker()

robot.work();
coffeeRobot.work();
robotDancer.work();
robotCooker.work();

let robotArray = [robot, coffeeRobot, robotDancer, robotCooker];

for(let i = 0; i < robotArray.length; i++) {
    robotArray[i].work();
}
/*
//prototype
function Robot() {}

Robot.prototype.work = function() {
    console.log("I'm Robot - I'm just working.");
}

function CoffeeRobot() {}

CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.work = function() {
    console.log("I'm CoffeeRobot - I'm just making coffee.");
}

function RobotDancer() {}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.work = function() {
    console.log("I'm RobotDancer - I'm just dancing.");
}

function RobotCooker() {}

RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.work = function() {
    console.log("I'm RobotCooker - I'm just cooking.");
}

let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDancer.work();
robotCooker.work();
*/