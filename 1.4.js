const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});


rl.question("Sisestage oma nimi: ", name => {
    rl.question("Sisestage lubatud kiirus: ", speedlimit => {
        rl.question("Sisestage tegelik kiirus: ", speed => {
            console.log(name + ", kiiruse ületamise eest on teie trahv " + Math.min(190, (speed - speedlimit) * 3));
            rl.close();
        });
    });
});