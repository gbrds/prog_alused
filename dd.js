const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Sisestage oma sugu (M või N): ", function(sugu) {
    sugu = sugu.toUpperCase();
    rl.question("Sisestage oma vanus: ", function(vanus) {
        rl.question("Valige treeningu tüüp (1, 2 või 3): ", function(treening) {

            let maxPulss;

            if (sugu === 'M') {
                maxPulss = (220 - vanus);
            }
            else if (sugu === 'N') {
                maxPulss = Math.round(206 - vanus * 0.88);
            }
            else {
                console.log('Sobimatu Sugu');
                rl.close();
            }
// WIP
            if (treening === '1') {

            }

            console.log(maxPulss);
            rl.close();
        });
    });
});