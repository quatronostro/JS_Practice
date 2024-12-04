// Functions

// Declarative Function

helloOne()
function helloOne() {
    console.log("Hello One!");
}

helloOne()

// The difference between these two, on declarative functions
// you can simply call "helloOne()" anywhere you want, and it will run 
// But on Anonymous functions you should call the function after declaration


// Anonymous Function

var helloTwo = function(){
    console.log("Hello Two!");
}

helloTwo()



// Another way

var helloThree = () => {
    console.log("Hello Three!");
}
helloThree()
// Last one is not like I used to on Java


// Function with arguments

function printName(name, lastName) {
    console.log(name + ' ' + lastName);
}

printName("Berke", "Baramuk")


// Function with return type

function multiplyByTwo(number){
    var result = number * 2
    return result
}

var result = multiplyByTwo(5)
console.log(result)



// import function

import { printAge } from '../helpers/printHelper.js'
printAge(15)


// import everything7

import * as helper from '../helpers/printHelper.js'
helper.printAge(31)