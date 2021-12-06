console.time("Program");
const fs = require("fs");
const read = fs.readFileSync("day6.txt").toString();
const fishes = read.split(",").filter(line => line).map(num => +num);
let counter = Array(9).fill(0); //Internal counter

function fishGrowth(days){
  fishes.forEach(fish => counter[fish]++);
  for(let i = 0; i < days; i++){
    let firstFish = counter[0];
    counter.push(counter.shift());
    counter[6] += firstFish;
  }
  return counter.reduce((a, b) => a += b);
}

let p1 = fishGrowth(80);
console.log(`P1 Answer: ${p1}`)

counter = Array(9).fill(0);

let p2 = fishGrowth(256);
console.log(`P2 Answer: ${p2}`)
console.timeEnd("Program");