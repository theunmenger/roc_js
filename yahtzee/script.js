let player_turn = true;
let turns = 0;
let dice_array = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

//if button is clicked
document.querySelector("#dice_roll").onclick = function() {

    //roll 6 dice
    let dice_roll = [dice(1,7), dice(1,7), dice(1,7), dice(1,7), dice(1,7)];

    //debug for turns
    console.log(turns);

    //turn change function
    if (turns == 3 && player_turn) {
        player_turn = false;
        turns = 0;
        document.querySelector("#dice_roll").textContent = "roll dice for cpu";
    } else if (turns == 3 && player_turn == false) {
        player_turn = true;
        turns = 0;
        document.querySelector("#dice_roll").textContent = "roll dice";
    }

    //display dice on screen
    if (player_turn && turns <= 3) {
        turns++;
        for(let i = 0; i < dice_roll.length; i++) {
            let num = i + 1;
            document.getElementById(num).textContent = dice_array[dice_roll[i] - 1];
        }
    } else if (player_turn == false && turns <=3) {
        turns++;
        for(let i = 0; i < dice_roll.length; i++) {
            document.getElementById(num).textContent = dice_array[dice_roll[i] - 1];
        }
    }
}

//dice roll function
function dice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}
