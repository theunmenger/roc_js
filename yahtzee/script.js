let player_turn = true;
let turns = 1;
let dice_array = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let is_clicked_array = [false, false, false, false, false];
let button_is_clicked = false;
let dice_roll = [0,0,0,0,0];
let three_of_a_kind = [0, 0, 0, 0, 0];
let four_of_a_kind = [0, 0, 0, 0, 0];
let table = document.querySelector("table");
let rows = table.rows;
let three_of_a_kind_score = 0;
let four_of_a_kind_score = 0;
//scores
let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
let sum = 0;
let yahtzee = 0;

//if button is clicked
document.querySelector("#dice_roll").onclick = function() {
    //clear scoreboard uppon reroll
    ones = 0;
    twos = 0;
    threes = 0;
    fours = 0;
    fives = 0;
    sixes = 0;
    sum = 0;
    three_of_a_kind_score = 0;
    four_of_a_kind_score = 0;

    button_is_clicked = true;

    //turn change function
    if (turns == 4 && player_turn) {
        player_turn = false;
        turns = 0;
        document.querySelector("#dice_roll").textContent = "roll dice for cpu";
        for (let i = 0; i < is_clicked_array.length; i++) {
        if (is_clicked_array[i])
            select_dice(i + 1);
        }
    } else if (turns == 4 && player_turn == false) {
        player_turn = true;
        turns = 0;
        document.querySelector("#dice_roll").textContent = "roll dice";
        for (let i = 0; i < is_clicked_array.length; i++) {
            if (is_clicked_array[i])
                select_dice(i + 1);
        }
    }

    //roll 5 dice
    for(let i = 0; i < dice_roll.length; i++) {
        if (!is_clicked_array[i]) {
            dice_roll[i] = dice(1,7);
        }
    }

    //debug for turns
    console.log(turns);

    //display dice on screen
    if (player_turn && turns <= 4) {
        turns++;
        for(let i = 0; i < dice_roll.length; i++) {
            if (!is_clicked_array[i]) {
                let num = i + 1;
                document.getElementById("dice_" + num).textContent = dice_array[dice_roll[i] - 1];
            }
        }
    } else if (player_turn == false && turns <= 4) {
        turns++;
        for(let i = 0; i < dice_roll.length; i++) {
            if (!is_clicked_array[i]) {
                let num = i + 1;
                document.getElementById("dice_" + num).textContent = dice_array[dice_roll[i] - 1];
            }
        }
    }

    //score math
    //ones
    for (let i = 0; i < dice_roll.length; i++) {
        if (dice_roll[i] == 1) {
            ones += dice_roll[i];
        }
    }
    //put ones in table
    table.rows[1].cells[1].innerText = ones;

    //twos
    for (let i = 0; i < dice_roll.length; i++) {
        if (dice_roll[i] == 2) {
            twos += dice_roll[i];
        }
    }
    //put twos in table
    table.rows[2].cells[1].innerText = twos;

    //threes
    for (let i = 0; i < dice_roll.length; i++) {
        if (dice_roll[i] == 3) {
            threes += dice_roll[i];
        }
    }
    //put threes in table
    table.rows[3].cells[1].innerText = threes;

    //fours
    for (let i = 0; i < dice_roll.length; i++) {
        if (dice_roll[i] == 4) {
            fours += dice_roll[i];
        }
    }
    //put fours in table
    table.rows[4].cells[1].innerText = fours;

    //fives
    for (let i = 0; i < dice_roll.length; i++) {
        if (dice_roll[i] == 5) {
            fives += dice_roll[i];
        }
    }
    //put fives in table
    table.rows[5].cells[1].innerText = fours;

    //sixes
    for (let i = 0; i < dice_roll.length; i++) {
        if (dice_roll[i] == 6) {
            sixes += dice_roll[i];
        }
    }
    //put sixes in table
    table.rows[6].cells[1].innerText = sixes;

    //sum
    sum = ones + twos + threes + fours + fives + sixes;

    //put sum in table
    table.rows[7].cells[1].innerText = sum;

    //three of a kind
    let counter = 0;
    let three_of_a_kind_score = 0;
    for (let i = 0; i < dice_roll.length; i++) {
        three_of_a_kind[i] = dice_roll[i];
    }
    three_of_a_kind.sort(function(a,b){return b - a});
    let checker = three_of_a_kind[0];
    for (let i = 0; i < dice_roll.length; i++) {
        if (checker == three_of_a_kind[i]) {
            counter++;
        } else if (counter < 3 && three_of_a_kind[i] != checker) {
            counter = 1;
            checker = three_of_a_kind[i];
        }
    }
    //put score in table
    if (counter == 3) {
        for (let i = 0; i < three_of_a_kind.length; i++) {
            three_of_a_kind_score += three_of_a_kind[i];
        }
        table.rows[9].cells[1].innerText = three_of_a_kind_score;
    }

    //four of a kind
    let counter2 = 0;
    let four_of_a_kind_score = 0;
    for (let i = 0; i < dice_roll.length; i++) {
        four_of_a_kind[i] = dice_roll[i];
    }
    four_of_a_kind.sort(function(a,b){return b - a});
    let checker2 = four_of_a_kind[0];
    for (let i = 0; i < dice_roll.length; i++) {
        if (checker2 == four_of_a_kind[i]) {
            counter2++;
        } else if (counter2 < 4 && four_of_a_kind[i] != checker2) {
            counter2 = 1;
            checker2 = four_of_a_kind[i];
        }
    }
    //put score in table
    if (counter2 == 4) {
        for (let i = 0; i < four_of_a_kind.length; i++) {
            four_of_a_kind_score += four_of_a_kind[i];
        }
        table.rows[10].cells[1].innerText = four_of_a_kind_score;
    }

    //full house

    //small straight

    //large straight

    //chance

    //yahtzee  
    for (let i = 0; i < dice_roll.length; i++) {
        if (dice_roll[i] = dice_roll[0]) {
            yahtzee++;
        } else {
            yahtzee = 0;
        }
    }
    //put yahtzee in table
    if (yahtzee == 5) {
        table.rows[16].cells[1].innerText = 50;
    }

    //total score
 }

//if finalize button is clicked 
document.querySelector("#finalize").onclick = function() {
    //change turn on finalize
    if (player_turn) {
        player_turn = false;
        turns = 0;
        document.querySelector("#dice_roll").textContent = "roll dice for cpu";
        for (let i = 0; i < is_clicked_array.length; i++) {
        if (is_clicked_array[i])
            select_dice(i + 1);
        }
    } else if (!player_turn) {
        player_turn = true;
        turns = 0;
        document.querySelector("#dice_roll").textContent = "roll dice";
        for (let i = 0; i < is_clicked_array.length; i++) {
        if (is_clicked_array[i])
            select_dice(i + 1);
        }
    }

    //clear score after finalize
    ones = 0;
    twos = 0;
    threes = 0;
    fours = 0;
    fives = 0;
    sixes = 0;
    sum = 0;
    three_of_a_kind_score = 0;
    four_of_a_kind_score = 0;
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