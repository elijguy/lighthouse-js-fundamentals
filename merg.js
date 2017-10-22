
var merge = function(array1,array2)
{
  var array3 = [];
  var a = 0;
  var b = 0;

  while ((a < array1.length) && (b < array2.length))
  {
    if (array1[a] < array2[b])
    {
      array3.push(array1[a]);
      a++;
    }
    else
    {
      array3.push(array2[b]);
      b++;
    }
  }


  while (a < array1.length)
  {
    array3.push(array1[a]);
    a++;
  }

  while (b < array2.length)
  {
    array3.push(array2[b]);
    b++;
  }

return array3;

};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);