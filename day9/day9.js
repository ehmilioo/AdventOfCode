console.time("Program");
const fs = require("fs");
const lines = fs.readFileSync("day9.txt").toString().split("\n").filter(num => num).map(a => a.split('').map(Number));
let result = 0;

for (let y = 0; y < lines.length; y++) {
    const row = lines[y];

    for (let x = 0; x < row.length; x++) {
        const current = row[x];
        const top = y > 0 ? lines[y-1][x] : Infinity;
        const right = x + 1 < row.length ? row[x+1] : Infinity;
        const bottom = y + 1 < lines.length ? lines[y+1][x] : Infinity;
        const left = x > 0 ? row[x-1] : Infinity;

        if (current < top && current < right && current < bottom && current < left){
            result += current + 1;
        } 
    }
}

console.log(result);
console.timeEnd("Program");