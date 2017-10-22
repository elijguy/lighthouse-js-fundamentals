var ageCalculator = function(name,yearOfBirth,currentYear){



var age = currentYear - yearOfBirth;

var b = name + " is " + age + " years old";

console.log(b);
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));
console.log(ageCalculator("Ali", 2016, 2016));