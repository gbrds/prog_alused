const readline = require('node:readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout    
});

rl.question("Sisesta kirja suurus: ", size => {
    rl.question("Sisestage kirja teema pealkiri: ", titleInput => {
        rl.question("Kas kirjaga on kaasas fail: ", failInput => {
            if (titleInput == "" || failInput == "jah" && size > 1) {
                console.log("Kiri on spamm");
            }
            else {
                console.log("Kiri ei ole spamm");
            }
            rl.close();
        });
    });
});