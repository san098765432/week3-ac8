var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;



// Use comparison operators so all expressions below log to the console as true
console.log(a !== b);   //a= "50"  b= 50////
console.log(b === e);  //50 , 100 divided by 2 = 50: same number and data type//
console.log(c !== b); // c- 100 b- 50//
console.log(d === 0); //c % b = 100 % 50 = 2r0 = answer is 0 is 0 > 0//




var expression1 = (b === e); //b=50 e= 100 divided by 2 = 50, e = 50, total sum= true TRUE)//
var expression2 = (e < d);e  //= 50, d=  c % b= 100 % 50 = 2r0= d= 0, so is 50 < 0, FALSE!!//

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2);
console.log( expression1 || !expression2);
  

