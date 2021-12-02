let t0 = Date.now();
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

//Answer: 1989014
console.log(`First Answer: ${x*y}`);
console.log(`P1 Time: ${(Date.now() - t0)/1000}s`)
t1 = Date.now();
// Between 0.009 - 0.01s

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
      break;
  }
}

//Answer: 2006917119
console.log(`Second Answer: ${x*y}`);
console.log(`P2 Time: ${(Date.now() - t1)/1000}s`)
// Between 0 - 0.001s