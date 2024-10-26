const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Sisestage oma sugu: ", gender => {
    gender = gender.toUpperCase();
    rl.question("Sisestage oma vanus: ", age => {
        rl.question("Valige treeningu tüüp (1, 2 või 3): ", type => {

            let maxPulse;

            if (gender == "M") {
                maxPulse = (220 - age);
            }
            else if (gender == "N") {
                maxPulse = Math.round(206 - age * 0.88);
            }
            
            if (type == "1") {
                console.log("Pulsisegedus peaks olema vahemikus " + (maxPulse * 0.5) + " kuni " + (maxPulse * 0.7));
            }
            else if (type == "2") {
                console.log("Pulsisegedus peaks olema vahemikus " + (maxPulse * 0.7) + " kuni " + (maxPulse * 0.8));
            }
            else if (type == "3") {
                console.log("Pulsisegedus peaks olema vahemikus " + (maxPulse * 0.8) + " kuni " + (maxPulse * 0.87));
            }
            rl.close();
        });
    });
});