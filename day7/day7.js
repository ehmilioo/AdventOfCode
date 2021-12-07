console.time("Program");
const fs = require("fs");
//Split after comma, cast to int's, sort to easier find median
const lines = fs.readFileSync("day7.txt").toString().split(",").map(num => +num).sort((a,b) => a - b);
let median = lines[Math.floor(lines.length/2)];
let medel = Math.floor(lines.reduce((a,b) => a + b) / lines.length);

let p1 = 0;
for(line of lines){
    //count the cost of every move with median because they all cost the same amount of fuel
    let cost = Math.abs(line - median);
    p1 += cost;
}

let p2 = 0;
for(line of lines){
    //moves are not constant therefore we need the formula to count the increasing cost
    let cost = Math.abs(line - medel);
    cost = ((cost*cost) + cost) / 2; //Times itself + 1 to get the extra cost, then divide it by 2 to get the actual fuelCost
    p2 += cost;
}

console.log(p1);
console.log(p2);
console.timeEnd("Program");