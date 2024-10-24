const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});

rl.question("Mitu korda äratada: ", count => {
    
    for(let step = 1; step <= count; step++) {
        console.log("Äratus");
    }
    rl.close();
})