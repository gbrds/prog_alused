const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});

rl.question("Kas soovite valida istekoha ise või loosida? ", valik => {
    if (valik == "ise") {
        rl.question("Kas soovite akna või vahekäigu kohta? ", koht => {
            if (koht == "aken") {
                console.log('Valisite akna koha.');
            }
            else if (koht == "vahekäik") {
                console.log("Valisite vahekäigu koha.");
            }
            rl.close();
        });
    }
    else if (valik == "loos") {
        let result = Math.ceil(Math.random() * 3);
        if (result == 1) {
            console.log("Loosisite endale akna koha.")
        }
        else {
            console.log("Loosisite endale vahekäigu koha.")
        }
        rl.close();
    }
});