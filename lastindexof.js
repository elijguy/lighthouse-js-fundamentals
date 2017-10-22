var lastIndexOf = function(array,value)
{
  var a = -1;
  var b = array.length - 1;


  for (var i = b; i >= 0; i--)
  {
    if (array[i] == value)
    {
      a = i;
      return a;
    };
  };

  return a;
};

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1)