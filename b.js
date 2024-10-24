const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});

function summa(number) {
    let sum = 0;

    for (let i=1; i <= number; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

rl.question("Sisesta ringide arv: ", function(numberInput) {
    let number = parseInt(numberInput);
    
    let result = summa(number);
    console.log('Porgandite koguarv on ' +result);
    

    rl.close();
});