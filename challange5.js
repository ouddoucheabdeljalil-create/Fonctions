const prompt = require('prompt-sync')();
function Factorielle(num){
    let factor = 1;
    for(let i = 1 ; i <= num ; i++){
        factor *= i ;
    }
    return factor ;
}
console.log("la factorielle est : ",Factorielle(Number(prompt("saisissez le numero : "))));