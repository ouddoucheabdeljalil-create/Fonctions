const prompt = require('prompt-sync')();

function  CompteRebour(num){
    const arry = [] ;
    for(num; num >= 0 ; num--){
       arry.push(num)
       
    }
    let swap = arry.join("\n")
return swap;
}

console.log(CompteRebour(Number(prompt("saisissez le numero : "))),"\n:)" )