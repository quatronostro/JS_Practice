// Logical AND

console.log(true && true) // = true
console.log(false && true) // = false
// All values have to be TRUE for expression to be true

// Logical OR
console.log(true || false) // = true
console.log(false || false) // = false


var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligiblityForDriversLicence = ageIsMoreThanEighteen && isUSCitizen
console.log("This customer is eligible for Drivers Licence: " + eligiblityForDriversLicence)

