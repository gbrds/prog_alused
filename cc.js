const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Sisesta leedu perenimi ", function(name) {
    if (name.slice(-2) == 'ne') {
        console.log('Abielus');
    }
    else if (name.slice(-2) == 'te') {
        console.log('Vallaline');
    }
    else if (name.slice(-1) == 'e') {
        console.log('Määramata');
    }
    else console.log('Pole leedulanna nimi')
    rl.close();
});