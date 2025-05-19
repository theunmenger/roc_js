let turns = 0;
let dice_array = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let is_clicked_array = [false, false, false, false, false];
let button_is_clicked = false;
let dice_roll = [0,0,0,0,0];
let score_counter = [0, 0, 0, 0, 0, 0]
let table = document.querySelector("table");
let rows = table.rows;
let is_locked = [false, false, false, false, false, false, false, false, false, false, false, false, false];
let dice_lock = false;

//scores
let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
let sum = 0;
let three_of_a_kind = false;
let two_of_a_kind = false;
let score = 0;
let counter = 0;
let sorted_dice = [0,0,0,0,0];
let checker = 0;
let full_house_score = 0;
let yahtzee_score = 0;
let bonus = 0;
let chance_score = 0;
let locked_counter = 0;
let locked_counter2 = 0;
let total = 0;
let small_straight_score = 0;
let large_straight_score = 0;
let three_of_a_kind_score = 0;
let four_of_a_kind_score = 0;

//if button is clicked
document.querySelector("#dice_roll").addEventListener("click", rollButtonClick) ;
function rollButtonClick() {

    //up turn counter 
    turns++;
    if (turns != 3) {
        dice_lock = false;
        document.querySelector("#dice_roll").textContent = "roll dice";
    }
        

    //clear scoreboard uppon reroll 
    if (!is_locked[0]) {
        ones = 0;
    }
    if (!is_locked[1]) {
        twos = 0; 
    }
    if (!is_locked[2]) {
        threes = 0;
    }
    if (!is_locked[3]) {
        fours = 0;
    }
    if (!is_locked[4]) {
        fives = 0;
    }
    if (!is_locked[5]) {
        sixes = 0;
    }
    score = 0;
    if (!is_locked[8]) {
        full_house_score = 0;
        table.rows[11].cells[1].innerText = 0;
    }
    if (!is_locked[12]) {
        yahtzee_score = 0;
        table.rows[15].cells[1].innerText = 0;
    }
    bonus = 0;
    if (!is_locked[11]) {
        chance_score = 0;
    }
    if (!is_locked[6]) {
        three_of_a_kind_score = 0;
        table.rows[9].cells[1].innerText = 0;
    }
    if (!is_locked[7]) {
        four_of_a_kind_score = 0;
        table.rows[10].cells[1].innerText = 0;
    }
    if (!is_locked[9]) {
        small_straight_score = 0;
        table.rows[12].cells[1].innerText = 0;
    }
    if (!is_locked[10]) {
        large_straight_score = 0;
        table.rows[13].cells[1].innerText = 0;
    }
    
    for(let i = 0; i < score_counter.length; i++) {
        score_counter[i] = 0;
    }
    two_of_a_kind = false;
    three_of_a_kind = false;
    score = 0;

    button_is_clicked = true;

    //roll 5 dice
    if (!dice_lock) {
        for(let i = 0; i < dice_roll.length; i++) {
            if (!is_clicked_array[i]) {
                dice_roll[i] = dice(1,7);
            }
        }
    }
    

    //display dice
    if (!dice_lock) {
        for(let i = 0; i < dice_roll.length; i++) {
            if (!is_clicked_array[i]) {
                let num = i + 1;
                document.getElementById("dice_" + num).textContent = dice_array[dice_roll[i] - 1];
            }
        }
    }

    //restrict turns
    if (turns == 4) {
        console.log("turn3");
        dice_lock = true;
        for (let i = 1; i <= dice_roll.length; i++) {
            document.getElementById("dice_" + i).textContent = "-";
            console.log(i);
        }
        document.querySelector("#dice_roll").textContent = "finalize";
        turns = 0;
        for (let i = 0; i < is_clicked_array.length; i++) {
            if (is_clicked_array[i]) {
                is_clicked_array[i] = false;
                document.querySelector("#dice_" + (i + 1)).style.backgroundColor = "rgba(245, 40, 145, 0)";
            }
        }
    }
    

    //score math
    singles();
    specials();
    //sum
    for (let i = 0; i < 6; i++) {
        if (is_locked[i]) {
            locked_counter++;
        } else {
            locked_counter = 0;
        }
        console.log("locked counter" + locked_counter);
    }
    if (locked_counter >= 6) {
        sum = ones + twos + threes + fours + fives + sixes;
        document.querySelector("#sum").style.backgroundColor = "rgb(132, 189, 0)";
        //bonus
        if (sum >= 63) {
            bonus = 35;
            table.rows[8].cells[1].innerText = bonus;
            document.querySelector("#bonus").style.backgroundColor = "rgb(132, 189, 0)";
        }
    }
    //total score
    for (let i = 0; i < 13; i++) {
        if (is_locked[i]) {
            locked_counter2++;
        } else {
            locked_counter2 = 0;
        }
    }
    if (locked_counter2 == 13) {
        table.rows[16].cells[1].innerText = sum + bonus + three_of_a_kind_score + four_of_a_kind_score + small_straight_score + large_straight_score + chance_score + yahtzee_score;
        document.querySelector("#total").style.backgroundColor = "rgb(132, 189, 0)";
    }
    
    //put scores in table
    //ones
    table.rows[1].cells[1].innerText = ones;
    //twos
    table.rows[2].cells[1].innerText = twos;
    //threes
    table.rows[3].cells[1].innerText = threes;
    //fours
    table.rows[4].cells[1].innerText = fours;
    //fives
    table.rows[5].cells[1].innerText = fives;
    //put sixes in table
    table.rows[6].cells[1].innerText = sixes;
    //sum
    table.rows[7].cells[1].innerText = sum;
    //chance
    table.rows[14].cells[1].innerText = chance_score;
 }

//clicking on table
for (let i = 1; i < 14; i++) {
    document.querySelector("#cell_" + i).onclick = function() {
        select_cell(i);
    }
}

// if dice is clicked
for (let i = 1; i < is_clicked_array.length + 1; i++) {
    document.querySelector("#dice_" + i).onclick = function() {
        select_dice(i);
    }
}

//cell selecting function
function select_cell(cell_num) {
    if (!is_locked[cell_num - 1]) {
        is_locked[cell_num - 1] = true;
        document.querySelector("#cell_" + cell_num).style.backgroundColor = "rgb(132, 189, 0)";
        turns = 4;
    } else {
        is_locked[cell_num - 1] = false;
        document.querySelector("#cell_" + cell_num).style.backgroundColor = "rgba(132, 189, 0, 0)";
    }
    console.log("cell num: " + cell_num + " " + is_locked[cell_num - 1]);
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

function specials() {
    //loop through score and count up numbers
    for (let i = 0; i < dice_roll.length; i++) {
        if (dice_roll[i] == 1) {
            score_counter[0]++;
        }
        if (dice_roll[i] == 2) {
            score_counter[1]++;
        }
        if (dice_roll[i] == 3) {
            score_counter[2]++;
        }
        if (dice_roll[i] == 4) {
            score_counter[3]++;
        }
        if (dice_roll[i] == 5) {
            score_counter[4]++;
        }
        if (dice_roll[i] == 6) {
            score_counter[5]++;
        }
    }
    //calculate score for three and four of a kind
    for (let i = 0; i < dice_roll.length; i++) {
        score += dice_roll[i];
    }
    //check for three of a kind, four of a kind, full house
    for (let i = 0; i < score_counter.length; i++) {
        if (score_counter[i] == 2) {
            //toggle for full house
            two_of_a_kind = true;
        }
        if (!is_locked[6]) {
            if (score_counter[i] == 3) {
                //put score in table
                three_of_a_kind_score = score;
                table.rows[9].cells[1].innerText = three_of_a_kind_score;
            } 
        }
        if (score_counter[i] == 3) {
            //toggle for full house
            three_of_a_kind = true;
        }
        if (!is_locked[7]) {
            if (score_counter[i] == 4) {
                //put score in table
                four_of_a_kind_score = score;
                table.rows[10].cells[1].innerText = four_of_a_kind_score;
            }
        }
        if (!is_locked[8]) {
            if (two_of_a_kind && three_of_a_kind) {
                //put score in table
                full_house_score = 25;
                table.rows[11].cells[1].innerText = full_house_score;
            }
        }
        
        //yahtzee
        if (score_counter[i] == 5) {
            yahtzee_score = 50;
            table.rows[15].cells[1].innerText = yahtzee_score;
        }
    }
    //small straight & large straight
    //convert dice roll into a new set array that is sorted 
     
    for (let i = 0; i < dice_roll.length; i++) {
        sorted_dice[i] = dice_roll[i];
    }
    sorted_dice.sort(function(a, b){return b - a});

    checker = sorted_dice[0];
    counter = 1;
    for (let i = 0; i < sorted_dice.length; i++) {
        if (sorted_dice[i] == checker - 1) {
            checker--;
            counter++;
        } else {
            counter = 1;
            checker = sorted_dice[i];
        }   
    }
    if (!is_locked[9]) {
        if (counter == 4) {
            small_straight_score = 30;
            table.rows[12].cells[1].innerText = small_straight_score;
        }
    }
    if (!is_locked[10]) {
        if (counter == 5) {
            large_straight_score = 40;
            table.rows[13].cells[1].innerText = large_straight_score;
        }
    }
    

    //chance 
    if (!is_locked[11]) {
        for (let i = 0; i < dice_roll.length; i++) {
            chance_score += dice_roll[i];
        }
    }
    
}

function singles() {
    //ones
    if (!is_locked[0]) {
        for (let i = 0; i < dice_roll.length; i++) {
            if (dice_roll[i] == 1) {
                ones += dice_roll[i];
            }
        }
    }
    
    //twos
    if (!is_locked[1]) {
        for (let i = 0; i < dice_roll.length; i++) {
            if (dice_roll[i] == 2) {
                twos += dice_roll[i];
            }
        }  
    }
    
    //threes
    if (!is_locked[2]) {
        for (let i = 0; i < dice_roll.length; i++) {
            if (dice_roll[i] == 3) {
                threes += dice_roll[i];
            }
        }
    }
    
    //fours
    if (!is_locked[3]) {
        for (let i = 0; i < dice_roll.length; i++) {
            if (dice_roll[i] == 4) {
                fours += dice_roll[i];
        }
        }    
    }
    
    //fives
    if (!is_locked[4]) {
        for (let i = 0; i < dice_roll.length; i++) {
            if (dice_roll[i] == 5) {
                fives += dice_roll[i];
            }
        }   
    }
    
    //sixes
    if (!is_locked[5]) {
        for (let i = 0; i < dice_roll.length; i++) {
                if (dice_roll[i] == 6) {
                sixes += dice_roll[i];
            }
        }    
    }
    
}