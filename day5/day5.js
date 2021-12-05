console.time("Program");
console.time("P1");
const fs = require("fs");
const read = fs.readFileSync("day5.txt");
const lines = read.toString().split("\n").filter(line => line); //Fix bad line
//Split the lines after the arrow, create map based on coords at comma then cast to int's
let sorted = lines.map(line => line.split(' -> ').map(coord => coord.split(',').map(num => +num)));
let map = new Map();
let secondMap = new Map();

for (const vector of sorted) {
    let [x1, y1] = vector[0];
    let [x2, y2] = vector[1];

    if(x1 == x2 || y1 == y2){
        xPositive = Math.sign(x2 - x1);
        yPositive = Math.sign(y2 - y1);
        while(x1 != x2 + xPositive || y1 != y2 + yPositive){
            let key = `${x1},${y1}`;
            let value = (map.get(key) ?? 0) + 1;
            map.set(key, value);
            x1 += xPositive;
            y1 += yPositive;
        }
    }
}
let arr = Array.from(map.values())
let filtered = arr.filter(num => num >= 2);
console.log(`P1 Answer: ${filtered.length}`)
console.timeEnd("P1");
console.time("P2");

for (const vector of sorted) {
    let [x1, y1] = vector[0];
    let [x2, y2] = vector[1];
    
    xPositive = Math.sign(x2 - x1);
    yPositive = Math.sign(y2 - y1);
    while(x1 != x2 + xPositive || y1 != y2 + yPositive){
        let key = `${x1},${y1}`;
        let value = (secondMap.get(key) ?? 0) + 1;
        secondMap.set(key, value);
        x1 += xPositive;
        y1 += yPositive;
    }
}

arr = Array.from(secondMap.values())
filtered = arr.filter(num => num >= 2);

console.log(`P2 Answer: ${filtered.length}`)
console.timeEnd("Program");
console.timeEnd("P2");

// P1 Answer: 6548
// P1: 43.671ms
// P2 Answer: 19663
// Program: 108.242ms
// P2: 64.648ms