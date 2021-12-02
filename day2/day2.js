const time = Date.now();
const fs = require('fs');
const read = fs.readFileSync("day2.txt");
let lines = read.toString().split("\n");
let x = 0;
let y = 0;
let y2 = 0;
let aim = 0;

for(var i=0; i<lines.length; i++){
  let dirr = lines[i].split(' ')[0];
  let amount = parseInt(lines[i].split(' ')[1]);
  switch(dirr){
    case 'forward':
      x+=amount;
      y2+=aim*amount;
      break;
    case 'down':
      aim+=amount;
      y+=amount;
      break
    case 'up':
      aim-=amount;
      y-=amount;
      break;
  }
    
}

console.log(`First Answer: ${x*y}`);
console.log(`Second Answer: ${x*y2}`);
console.log(`Time lapsed: ${(Date.now() - time)/1000}s`)
// Between 0.042 - 0.043s