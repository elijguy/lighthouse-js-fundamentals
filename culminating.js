var loopyLighthouse = function(range, multiples, words)
{
  for (var i = range[0]; i <= range[1] ; i++)
  {
    var x;

    if (i % multiples[0] === 0)
    {
      x = words[0];
    };
    if(i % multiples[1] === 0)
    {
      x = words[1];
    };
    if ((i % multiples[0] === 0) && (i % multiples[1] === 0))
    {
      x = (words[0] + words[1]);
    };
    if ((i % multiples[0] !== 0) && (i % multiples[1] !== 0))
    {
      x = i;
    };

    console.log(x);

  };
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
