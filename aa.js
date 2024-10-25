// Import the readline module
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Sisesta ainepunktide arv: ", function(ainepunktInput) {
    let ainepunkt = parseInt(ainepunktInput);
    rl.question("Sisesta nädalate arv: ", function(weekInput) {
        let week = parseInt(weekInput);

        let result = Math.round(ainepunkt * 26 / week);
        
        console.log(result)
        rl.close();
    });
});