let wins = 0;
let losses = 0;
let ties = 0;

function dice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}

document.getElementById("button").onclick = function() {
    let player_dice1 = dice(1,7);
    let player_dice2 = dice(1,7);
    let cpu_dice1 = dice(1,7);
    let cpu_dice2 = dice(1,7);

    let player_num = player_dice1 + player_dice2;
    let cpu_num = cpu_dice1 + cpu_dice2;

    document.getElementById("player_dice1").textContent = "player dice 1: " + player_dice1;
    document.getElementById("player_dice2").textContent = "player dice 2: " + player_dice2;
    document.getElementById("cpu_dice1").textContent =  "computer dice 1: " + cpu_dice1;
    document.getElementById("cpu_dice2").textContent =  "computer dice 2: " + cpu_dice2;

    if (player_num > cpu_num) {
        wins++;
        document.getElementById("wins").textContent = "wins: " + wins;
    } else if (player_num < cpu_num) {
        losses++;
        document.getElementById("losses").textContent = "losses: " + losses;
    } else if (player_num == cpu_num) {
        ties++;
        document.getElementById("ties").textContent = "ties: " + ties;
    }
}
