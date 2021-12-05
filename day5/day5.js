console.time("Program");
const fs = require("fs");
const read = fs.readFileSync("day5.txt");
const lines = read.toString().split("\n").filter(line => line); //Fix bad line
//Split the lines after the arrow, create map based on coords at comma then cast to int's
let sorted = lines.map(line => line.split(' -> ').map(coord => coord.split(',').map(num => +num)));
let map = new Map();
let secondMap = new Map();

for (const vector of sorted) {
    let [x, y] = vector[0];
    let [x0, y0] = vector[1];

    let [x1, y1] = vector[0];
    let [x2, y2] = vector[1];

    xPos = Math.sign(x0 - x);
    yPos = Math.sign(y0 - y);
    while(x != x0 + xPos || y != y0 + yPos){
        let key = `${x},${y}`;
        let value = (secondMap.get(key) ?? 0) + 1;
        secondMap.set(key, value);
        x += xPos;
        y += yPos;
    }

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
console.log("\n");
console.log(`P1 Answer: ${filtered.length}`)

arr = Array.from(secondMap.values())
filtered = arr.filter(num => num >= 2);

console.log(`P2 Answer: ${filtered.length}`)
console.timeEnd("Program");