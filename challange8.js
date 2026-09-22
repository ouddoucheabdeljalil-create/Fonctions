const prompt = require('prompt-sync')();
function  Verification (num){
    if ( num % 2 === 0){
        console.log(`le chiffre [${num}] est un nombe pair .`);
    }
    else{
        console.log(`le chiffre [${num}] est un nombe impair .`);

    }
}
Verification(Number(prompt("saisissez le numero : ")))