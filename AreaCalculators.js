var RectangleArea = function(length, width)
{
  var a;

  if ((length > 0) && (width > 0))
  {
    a = (length * width);
    return a;
  }

  if ((length < 0) && (width < 0))
  {
    a = undefined;
    return a;
  }



}

var TriangleArea = function(base, height)
{

  var b;

  if ((base > 0) && (height > 0))
  {
    b = (base * height) / 2;
    return b;
  }

  if ((base < 0) && (height < 0))
  {
   b = undefined;
   return b;
  }

}

var calculateCircleArea = function(radius)
{
  var c;

  if (radius > 0)
  {
    c = (Math.PI * ((radius) * (radius)))
    return c;
  }

  if (radius < 0)
  {
    c = undefined;
    return c;
  }

}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
