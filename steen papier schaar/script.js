let array = ["steen", "papier", "schaar"]
let player1 = dice(0, 3);
let player2 = dice(0, 3);

console.log("player1 heeft " + array[player1]);
console.log("player2 heeft " + array[player2]);

if (player1 == 0 && player2 == 2) {
    console.log("player1 wint met " + array[player1]);
} else if (player1 == 1 && player2 == 0) {
    console.log("player1 wint met " + array[player1]);
} else if (player1 == 2 && player2 == 1) {
    console.log("player1 wint met " + array[player1]);
} else if (player1 == player2) {
    console.log("gelijkspel");
} else {
    console.log("player2 wint met " + array[player2])
}

function dice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}