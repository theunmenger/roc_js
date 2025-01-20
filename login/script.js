let pass = "kaas";
let email = "kaas@hotmail.com";

document.getElementById('submit').onclick = function() {
    if (document.getElementById('pass').value == pass && document.getElementById('email').value == email) {
        alert("ingelogd");
    } else {
        alert("onjuist wachtwoord of email");
    }
}