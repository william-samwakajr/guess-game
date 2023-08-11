function compare() {
    var Uinput = document.getElementById('data').value;
    const loseH = "too high";
    const loseL = "too low";
    const win = "you win";
    if (Uinput < 5) {
        document.getElementById('result').innerText = 'too low';
    } else if (Uinput > 5) {
        document.getElementById('result').innerText = 'too high';
    } else if (Uinput = 5) {
        document.getElementById('result').innerText = 'winner';
    }
}