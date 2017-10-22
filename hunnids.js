var howManyHundreds = function(x)
{

  var b = (x%100);
  var c = (x - b);
  var a = (c/100);
return a;
};

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);