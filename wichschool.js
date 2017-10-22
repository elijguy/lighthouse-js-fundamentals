function whichSchool(age)
{
  var b;
  if (age < 13)
  {
    b = "Elementary School";
  }

  if ((age >= 13) && (age <= 18))
  {
    b = "Secondary School";

  }

  if (age > 18)
  {
    b = "Lighthouse Labs";
  }
  return b;
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));