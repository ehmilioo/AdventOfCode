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

for(let i=0; i<formatted.length; i++){
    let numbers = [];
    let signal = formatted[i].signal;
    p1 += (formatted[i].output.filter(pattern => pattern.length != 5 && pattern.length != 6)).length

    // Unique patterns
    numbers[1] = signal.find(pattern => pattern.length == 2);
    numbers[4] = signal.find(pattern => pattern.length == 4);
    numbers[7] = signal.find(pattern => pattern.length == 3);
    numbers[8] = signal.find(pattern => pattern.length == 7);

    // 6-letter patterns: 9, 0, 6
    numbers[6] = signal.find(pattern => pattern.length == 6 && !includes(pattern, numbers[1]));
    numbers[9] = signal.find(pattern => pattern.length == 6 && pattern != numbers[6] && includes(pattern, numbers[4]));
    numbers[0] = signal.find(pattern => pattern.length == 6 && pattern != numbers[6] && pattern != numbers[9]);

    // 5-letter patterns: 3, 5, 2
    numbers[3] = signal.find(pattern => pattern.length == 5 && includes(pattern, numbers[1]));
    numbers[5] = signal.find(pattern => pattern.length == 5 && pattern != numbers[3] && includes(numbers[6], pattern));
    numbers[2] = signal.find(pattern => pattern.length == 5 && pattern != numbers[3] && pattern != numbers[5]);

    numbers.forEach((x, i) => {
        numbers[i] = x.split('').sort().join('');
    });

    let string = '';
    formatted[i].output.forEach(x => {
        let index = x.split('').sort().join('');
        string += numbers.indexOf(index);
    });
    p2 += +string;
}

function includes(a, b) {
    const set = new Set([...a]);
    return [...b].every((x) => set.has(x));
}

console.log(p1);
console.log(p2);
console.timeEnd("Program");