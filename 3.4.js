const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});

let ounad = 14;


rl.question("Mitu pöialpoissi tahab õunu: ", A => {
    if (A > 7) {
        console.log('Pöialpoisse on 7!');
    }
    else for (let B = 1; B <= A; B++) {
        let result = Math.floor(Math.random() * 2) + 1; //could also use math.ceil, this way don't need to "+1"
        ounad = ounad - result
        console.log(result);
    };
    console.log('Alles jäänud õunad ' +ounad);
    rl.close();
});
