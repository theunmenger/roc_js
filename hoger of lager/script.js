let number = Math.floor(Math.random() * 11);


document.getElementById('submit').onclick = function() {
    let number_guessed = document.getElementById('number_guessed').value;
    console.log(number);
    if (number_guessed < number) {
        alert("too low");
    } else if (number_guessed > number) {
        alert("too high");
    } else if (number == number_guessed) {
        alert("you win");
        document.getElementById('number_guessed').value = '';
        location.reload();
    }
}
