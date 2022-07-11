// //ways to print to Javascript
// console.log("Hello World");
// alert("Hello");
// document.write("<h1>Javascript practice</h1>");

// // Javacript Console API
// console.log("Heyy", 6+3, "");
// console.warn("this is a warning");
// console.error("This is a error");

//Javascript Variables
//What are Variables?: Containers to store data values.
//  var number1= 24;
//  var number2= 45;
//  console.log(number1+number2);

//  //Data types in Javascript
//  //Numbers
//  var num1= 45;
//  varnum2=23;

//  //strings
//  var str1 ="This is a string";
//  var str2 ="This is also a string";

// //objects
// var marks ={
//     sami:34,
//     sabi:23,
// }
// console.log(marks);

//boolean
// var a= true;
// var b= false;
//  console.log(a,b)

 //variable not defined
//  var und=undefined;

 //null
//  var n= null;
//  console.log(n);

 /*Two types of data types in JavaScript 
 1. Primitive data types (6): number1,string,boolean,null,undefined,symbol
 2. Reference data types: Arrays and Objects */

//  var array= [1,2,3,4,5,6,7];
//   console.log(array);
//   console.log(array[5]);

  //operators in JavaScript
  //Arthemetic Operators

//   var c=34;
//   var d= 22;
//   console.log("The value of a+b is",c+d);
//   console.log("The value of a-b is",c-d);
//   console.log("The value of a/b is",c/d);
//   console.log("The value of a*b is",c*d);

// Assignment Operators
// var s = d;
// s += 2;
// s -= 2; // s =s -2;
// s *= 2;
// s /= 2;
// console.log(s)

//Comparison Operators
// var x = 45;
// var y = 34;
// console.log( x == y);
// console.log( x >= y);
// console.log( x <= y);
// console.log( x > y);
// console.log( x < y);

//Logical Operators

// logical and
//  console.log(true && true );
//  console.log(true && false );
//  console.log(false && true );
//  console.log(false && false );

//logical or
//  console.log(true || true );
//  console.log(true || false );
//  console.log(false || true );
//  console.log(false || false );

//logical not
// console.log(!false);
// console.log(!true);

//Functions
// DRY= DO NOT REPEAT YOURSELF

function avg(a,b){
    a = (a+b)/2;
    return a;
}
a1 = avg(2,4);
a2 = avg(23,76);
// console.log(a1);

// Conditionals

var age= 124;
// single statement
// if (age> 18){
//     console.log("You are not a child");
// }

// if/else Statement
// if (age> 10){
//     console.log("You are not a child");
// }
// else{
//     console.log("You are a Kid")
// }

// if/else ladder
if(age<4){
    console.log("You are not a Kid")
}
else if(age<=18){
    console.log(" you are kid")
}
else if(age==80){
    console.log(" You are OLD")
}
else if(age>100){
    console.log("You must be Dead")
}
else{
    console.log("CHILD")
}

console.log("End of Ladder");
