var concat = function(a,b)
{
  var x;
  for (var i = 0; i < b.length; i++)
  {
    x = b[i];


    for (var i = 0; i < a.length; i++)
      {
        if ((x > a[i]) && (x < a[i]))
        {
          a.push(x)
        }

      }
  }
  return a;
};

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);


