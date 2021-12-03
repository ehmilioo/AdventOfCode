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

let oxygen;
let co2;
getValues(0, lines, 'o2')
getValues(0, lines, 'co2')

function getValues(index, array, criteria){
    let ones = 0;
    array.forEach(el => {
        el[index] == '1' ? ones++ : undefined
    });

    let newArr
    if(ones>=array.length/2){
        if(criteria == 'o2'){
            newArr = array.filter(el=>el[index]=="1")
        }else{
            newArr = array.filter(el=>el[index]=="0")
        }
    }else{
        if(criteria == 'o2'){
            newArr = array.filter(el=>el[index]=="0")
        }else{
            newArr = array.filter(el=>el[index]=="1")
        }
    }
    if(newArr.length==1){
        criteria=='o2' ? oxygen = parseInt(newArr[0],2) : co2 = parseInt(newArr[0],2)
    }else{
        getValues(index+1,newArr,criteria)  
    }
}

console.log(`P2 Answer: ${oxygen*co2}`)
console.timeEnd("P2");
console.timeEnd("Program");