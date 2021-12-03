console.time("Program");
console.time("P1");
const fs = require('fs');
const read = fs.readFileSync("day3.txt");
let lines = read.toString().split("\n");
const PATTERN_SIZE = 12;
let gamma = '';
let epsilon = '';
let rows = {}

for(let i=0; i<lines.length; i++){
    let line = lines[i];
    for(let j=0; j < PATTERN_SIZE; j++){
        if(line[j] == '1'){
            if(rows[j]){
                rows[j]+=1;
            }else{
                rows[j] = 1;
            }
        }
    }
}

for (let col in rows) {
    if(rows[col]>(lines.length/2)){
        gamma += '0';
        epsilon += '1';
    }else{
        gamma += '1';
        epsilon += '0';
    }
}
let gamDecimal = parseInt(gamma, 2);
let epsDecimal = parseInt(epsilon, 2);

console.log(`P1 Answer: ${gamDecimal * epsDecimal}`)
console.timeEnd("P1");
console.time("P2");