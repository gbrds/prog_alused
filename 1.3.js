const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});

rl.question("Sisestage number: ", nr => {
    rl.question("Sisestage astendaja: ", pow => {
        console.log(Math.pow(nr, pow));
        rl.close();
    });
});