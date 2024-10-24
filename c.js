const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});

rl.question ("Täringute arv: ", taringArv => {
    for (let taring = 1; taring <= taringArv; taring++) {
        let result = Math.floor(Math.random() * 6) + 1;
        console.log(result);
    }
    rl.close();
})

