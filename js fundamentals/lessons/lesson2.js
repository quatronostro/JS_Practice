// Concatination and Interpolation

var price = 50
var itemName = "Table"

var messageToPrint = "The price for your " + itemName + " is " + price + " dollars" // Concatination 
console.log(messageToPrint)

var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`
console.log(messageToPrint2)

 