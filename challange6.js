const prompt = require('prompt-sync')();

function Fibonacci(num){
let x = 1 ;
let y = 0 ;
for ( let i = 2 ; i <= num ; i++ ){
   let z = x + y ;
   y = x ;
   x = z ;
}
if (num === 0){
    x = 0
}
return x  ;
}
console.log(" le terme de Fibonacci :",Fibonacci(Number(prompt("saisissez le numero : "))))
