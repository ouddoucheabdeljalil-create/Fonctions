const prompt = require('prompt-sync')();
function maximum (num1, num2) {
    let max = 0;
    if(num1 < num2){
        max = num2 ;
    }
    else{
        max = num1;
    }
    return max;
}
console.log("le plus grand numbre : " ,maximum(Number(prompt("entez premier numero : ")), Number(prompt("entez deuxieme numero : "))));