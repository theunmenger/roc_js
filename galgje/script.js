let woord = prompt("kies een woord");
let letter;
let levens = 10;
let score = 0;

const myArray = woord.split("");

document.querySelector("#health").textContent = "levens: " + levens;

//voeg text toe voor interface
for(let i = 0; i < myArray.length; i++) {
    const newH1 = document.createElement("h1");
    newH1.textContent = "*";
    newH1.id = i;
    document.getElementById("letter_container").append(newH1);
}

document.getElementById("button").onclick = function() {

    letter = document.getElementById("letter").value;
    let letter_goed = false;

    document.getElementById("letter").value = '';

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == letter){
            document.getElementById(i).textContent = myArray[i];
            letter_goed = true;
            score++;
            document.getElementById("score").textContent = "score: " + score;
        }
    }

    if (letter_goed == false) {
        levens -= 1;
        document.getElementById("health").textContent = "levens: " + levens;
    }
    if (levens == 0) {
        alert("game over");
        location.reload();
    }
    if (score == myArray.length) {
        alert("You won!");
        location.reload();
    }
}

