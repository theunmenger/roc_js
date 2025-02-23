let player_turn = true;
let turns = 1;
let dice_array = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let is_clicked_array = [false, false, false, false, false];
let button_is_clicked = false;

//if button is clicked
document.querySelector("#dice_roll").onclick = function() {

    button_is_clicked = true;

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

    //roll 6 dice
    let dice_roll = [dice(1,7), dice(1,7), dice(1,7), dice(1,7), dice(1,7)];

    //debug for turns
    console.log(turns);

    //display dice on screen
    if (player_turn && turns <= 3) {
        turns++;
        for(let i = 0; i < dice_roll.length; i++) {
            let num = i + 1;
            document.getElementById("dice_" + num).textContent = dice_array[dice_roll[i] - 1];
        }
    } else if (player_turn == false && turns <=3) {
        turns++;
        for(let i = 0; i < dice_roll.length; i++) {
            let num = i + 1;
            document.getElementById("dice_" + num).textContent = dice_array[dice_roll[i] - 1];
        }
    }
}

// if dice is clicked
document.querySelector("#dice_1").onclick = function() {
    select_dice(1);
}
document.querySelector("#dice_2").onclick = function() {
    select_dice(2);
}
document.querySelector("#dice_3").onclick = function() {
    select_dice(3);
}
document.querySelector("#dice_4").onclick = function() {
    select_dice(4);
}
document.querySelector("#dice_5").onclick = function() {
    select_dice(5);
}

//dice selecting function
function select_dice(dice_num) {
    if(!is_clicked_array[dice_num - 1] && button_is_clicked) {
        document.querySelector("#dice_" + dice_num).style.backgroundColor = "red";
        is_clicked_array[dice_num - 1] = true;
    } else if (is_clicked_array[dice_num - 1] && button_is_clicked) {
        document.querySelector("#dice_" + dice_num).style.backgroundColor = "rgba(245, 40, 145, 0)"
        is_clicked_array[dice_num - 1] = false;
    }
}

//dice roll function
function dice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
}
