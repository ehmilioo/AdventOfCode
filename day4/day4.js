console.time("Program");
const fs = require('fs');
const read = fs.readFileSync("day4.txt");
let lines = read.toString().split("\n");
let numbers = lines.shift().split(",");
lines.shift();
let boards = [];
let arr = [];
let players = [];

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (i == lines.length - 1){
        boards.push(arr);
    }
    if (line != "") {
        let filteredRow = line.split(" ").filter((num) => num != "");
        arr.push(filteredRow);
    } else {
        boards.push(arr);
        arr = [];
    }
}

for(let i=0; i < numbers.length; i++){
    let number = numbers[i];
    checkHit(number);
    let winningBoards = [];
    for (let i = 0; i < boards.length; i++) {
        let board = boards[i];
        if (bingo(board)) {
            winningBoards.push(board);
            boards.splice(i, 1);
        }
    }
    if(winningBoards.length > 0){
        winningBoards.forEach((board) => {
            players.push({number, board});
        });
    }
}

function checkHit(number) {
    boards.forEach((board, b) => {
        board.forEach((row, r) => {
            row.forEach((n, i) => {
                if (n == number) {
                    boards[b][r][i] = `[${n}]`; //Mark the hit number
                }
            });
        });
    });
}

function bingo(board) {
    const REQUIREMENTS = (num => num.includes("["))
    for(let i=0; i<5; i++){
        let row = board[i];
        let column = [board[0][i], board[1][i], board[2][i], board[3][i], board[4][i]];
        if (column.every(REQUIREMENTS) || row.every(REQUIREMENTS)){
            return true;
        }
    }
}

function sum(board){
    let nonMarkedNums = board.join().split(",").filter((num) => !num.includes("[")); 
    let intNums = nonMarkedNums.map((num) => +num);
    let summedNums = intNums.reduce((arr , num) => {
        return arr + num;
    })
    return summedNums;
}

let player = players[0];
let p1Answer = player.number * sum(player.board);
console.log(`P1 Answer: ${p1Answer}`)

let secondPlayer = players[players.length - 1];
let p2Answer = secondPlayer.number * sum(secondPlayer.board);
console.log(`P2 Answer: ${p2Answer}`)

console.timeEnd("Program");