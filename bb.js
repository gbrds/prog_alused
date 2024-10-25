const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Väline õhutemperatuur: ", function(temp) {
    if (temp <= 4) {
        console.log('Väljas on jäätumise oht');
    } else {
        console.log('Väljas pole jäätumsie oht');
    }
    
    rl.close();
})