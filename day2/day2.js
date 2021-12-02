console.time("Program");
console.time("P1");
const fs = require('fs');
const read = fs.readFileSync("day2.txt");
let lines = read.toString().split("\n");
let x = 0;
let y = 0;

for(command of lines){
  let direction = command.split(' ')[0];
  let amount = parseInt(command.split(' ')[1]);
  switch(direction){
    case 'forward': x+=amount; break
    case 'down': y+=amount; break
    case 'up': y-=amount; break
  }
}

console.log(`P1 Answer: ${x*y}`);
console.timeEnd('P1');
console.time('P2');

x = 0;
y = 0;
let aim = 0;

for(command of lines){
  let direction = command.split(' ')[0];
  let amount = parseInt(command.split(' ')[1]);
  switch(direction){
    case 'down': aim+= +amount; break
    case 'up': aim-=amount; +amount; break
    case 'forward':
      x+= +amount;
      y+= +amount*aim;
      break
  }
}

console.log(`P2 Answer: ${x*y}`);
console.timeEnd('P2');
console.timeEnd('Program');