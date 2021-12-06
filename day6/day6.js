console.time("Program");
const fs = require("fs");
const fishes = fs.readFileSync("day6.txt").toString().split(",").filter(line => line).map(num => +num);

function fishGrowth(days){
  let counter = Array(9).fill(0); //Internal counter
  fishes.forEach(fish => counter[fish]++);
  for(let i = 0; i < days; i++){
    let firstFish = counter.shift();
    counter.push(firstFish);
    counter[6] += firstFish;
  }
  return counter.reduce((a, b) => a += b);
}

console.log(`P1 Answer: ${fishGrowth(80)}`)
console.log(`P2 Answer: ${fishGrowth(256)}`)
console.timeEnd("Program");