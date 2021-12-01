const fs = require('fs');
const read = fs.readFileSync("day1.txt");
let lines = read.toString().split("\n").map(Number);
let firstAnswer = 0;
let secondAnswer = 0;

for(var i=0; i<lines.length; i++){
    if(lines[i] < lines[i+1]){
        firstAnswer++;
    }
}

for (var i=1; i<lines.length; i++) {
    if ((lines[i] + lines[i+1] + lines[i+2]) > (lines[i-1] + lines[i] + lines[i+1])) {
        secondAnswer++
    }
}

console.log(`First Answer: ${firstAnswer}`);
console.log(`Second Answer: ${secondAnswer}`);
