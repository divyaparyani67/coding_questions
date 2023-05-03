// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);

//     var x = 2;
//     let y = 12;
//   }
//   func1();

//   Code 1 - Outputs 2 and 12. Since, even though let variables are not hoisted, due to the async nature of javascript, the complete function code runs before the setTimeout function. Therefore, it has access to both x and y.

// function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   }
//   func2();

//   Code 2 - Outputs 3, three times since variable declared with var keyword does not have block scope. Also, inside the for loop, the variable i is incremented first and then checked.

// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//   })();

//   Code 3 - Output in the following order:
// 2
// 4
// 3
// 1 // After two seconds
// Even though the second timeout function has a waiting time of zero seconds, the javascript engine always evaluates the setTimeout function using the Web API, and therefore, the complete function executes before the setTimeout function can execute

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// Output will be {name: “Akki”}.

// Adding objects as properties of another object should be done carefully.

// Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} ,

// While setting a property of an object, javascript coerces the parameter into a string.

// Therefore, since y is an object, it will be converted to ‘object Object’.

// Both x[y] and x[z] are referencing the same property.

// function runFunc(){
//     console.log("1" + 1);
//     console.log("A" - 1);
//     console.log(2 + "-2" + "2");
//     console.log("Hello" - "World" + 78);
//     console.log("Hello"+ "78");
//   }
//   runFunc();
//   Code 2 - Outputs in the following order:
// 11
// Nan
// 2-22
// NaN
// Hello78

//   let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));

// Code 3 - Output in the following order due to equality coercion:

// true
// false

// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

// Output is NaN.

// random() function has functional scope since x is declared and hoisted in the functional scope.

// Rewriting the random function will give a better idea about the output:

// let hero = {
//     powerLevel: 99,
//     getPower(){
//       return this.powerLevel;
//     }
//   }

//   let getPower = hero.getPower;

//   let hero2 = {powerLevel:42};
//   console.log(getPower());
//   console.log(getPower.apply(hero2));

//   undefined
//   42
//   Reason - The first output is undefined since when the function is invoked, it is invoked referencing the global object:

// // Code 2

// const a = function () {
//   console.log(this);

//   const b = {
//     func1: function () {
//       console.log(this);
//     },
//   };

//   const c = {
//     func2: () => {
//       console.log(this);
//     },
//   };

//   b.func1();
//   c.func2();
// };

// a();

// // Outputs in the following order:

// // global/window object
// // object "b"
// // global/window object

// // Since we are using the arrow function inside func2, this keyword refers to the global object.

//   // Code 3

//   const b = {
//     name:"Vivek",
//     f: function(){
//       var self = this;
//       console.log(this.name);
//       (function(){
//         console.log(this.name);
//         console.log(self.name);
//       })();
//     }
//   }
//   b.f();

//   Outputs in the following order:

// "Vivek"
// undefined
// "Vivek"
// Only in the IIFE inside the function f, this keyword refers to the global/window objec

// (function(a){
//     return (function(){
//       console.log(a);
//       a = 23;
//     })()
//   })(45);

//   //Even though a is defined in the outer function, due to closure the inner functions have access to it.

// Code 2

// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

//   function bigFunc(element){
//     let newArray = new Array(700).fill('♥');
//     return newArray[element];
//   }

//   console.log(bigFunc(599)); // Array is created
//   console.log(bigFunc(670)); // Array is created again

//   // Code 3

//   // The following code outputs 2 and 2 after waiting for one second
//   // Modify the code to output 0 and 1 after one second.

//   function randomFunc(){
//     for(var i = 0; i < 2; i++){
//       setTimeout(()=> console.log(i),1000);
//     }
//   }
//   randomFunc();

//   Using let keyword:

// function randomFunc(){
//   for(let i = 0; i < 2; i++){
//     setTimeout(()=> console.log(i),1000);
//   }
// }
// randomFunc();
// Using closure:

// function randomFunc(){
//   for(var i = 0; i < 2; i++){
//   (function(i){
//       setTimeout(()=>console.log(i),1000);
//     })(i);
//   }
// }
// randomFunc();

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }
