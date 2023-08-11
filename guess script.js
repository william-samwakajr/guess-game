let press = document.querySelector('#button');
let Uinput = document.querySelector('#data').value;
let endQoute = document.querySelector('#result');
let winningNumber = 5;

press.addEventListener('click', function() {
    if (Uinput < winningNumber) {
        endQoute.innerText = 'TOO LOW';
    } else if (Uinput > winningNumber) {
        endQoute.innerText = 'TOO HIGH';
    } else if (Uinput = winningNumber) {
        endQoute.innerText = 'YOU WINN!!'
    }
})