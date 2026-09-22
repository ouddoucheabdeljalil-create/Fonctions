const prompt = require('prompt-sync')();

function addition(num1,num2) {
    return num1 * num2 ;
}
console.log(addition(Number(prompt("entez premier numero : ")), Number(prompt("entez deuxieme numero : "))));