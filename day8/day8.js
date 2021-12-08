console.time("Program");
const fs = require("fs");
const lines = fs.readFileSync("day8.txt").toString().trim().split(/\n/);
let p1 = 0;
let p2 = 0;
let formatted = [];

lines.forEach(msg => {
    let divided = msg.split(' | ');
    let signal = divided[0].split(' ');
    let output = divided[1].split(' ');
    formatted.push({ signal: signal, output:  output});
});

for (let digit of formatted) {
    let filtered = digit.output.filter(d => d.length != 5 && d.length != 6)
    p1 += filtered.length;
}

for (let i = 0; i < formatted.length; i++) {
    let msg = [];
    //These we already know
    msg[1] = formatted[i].signal.find(signal => signal.length == 2);
    msg[4] = formatted[i].signal.find(signal => signal.length == 4);
    msg[7] = formatted[i].signal.find(signal => signal.length == 3);
    msg[8] = formatted[i].signal.find(signal => signal.length == 7);

    msg[3] = formatted[i].signal.find(x => {
        let split = x.split('');
        let z = msg[7].split('');
        return split.length == 5 && split.filter(value => !z.includes(value)).length == 2;
    });

    msg[5] = formatted[i].signal.find(x => {
        let split = x.split('');
        let z = msg[4].split('');
        return split.length == 5 && split.filter(value => !z.includes(value)).length == 2 && x != msg[3];
    });

    msg[2] = formatted[i].signal.find(x => x.length == 5 && x != msg[3] && x != msg[5]);

    msg[6] = formatted[i].signal.find(x => {
        let split = x.split('');
        let z = msg[1].split('');
        return split.length == 6 && split.filter(value => !z.includes(value)).length == 5;
    });

    msg[9] = formatted[i].signal.find(x => {
        let split = x.split('');
        let z = msg[4].split('');
        return split.length == 6 && split.filter(value => !z.includes(value)).length == 2 && x != msg[6];
    });

    msg[0] = formatted[i].signal.find(x => x.length == 6 && x != msg[6] && x != msg[9]);

    msg.forEach((x, i) => {
        msg[i] = x.split('').sort().join('');
    });

    let string = '';
    formatted[i].output.forEach(x => {
        let index = x.split('').sort().join('');
        string += msg.indexOf(index);
    });
    p2 += +string;
}

console.log(p1);
console.log(p2);
console.timeEnd("Program");