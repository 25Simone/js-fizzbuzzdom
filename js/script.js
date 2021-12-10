// Dichiaro la variabile che mi collega all html del boxes-container
const boxesContainer = document.querySelector('.boxes-container');

// Utilizzo un ciclo for per contare fino a 100
for (let i = 1; i <= 100; i++) {
    // imposto if ed else per soddisfare le condizioni della traccia
    if (i % 3 === 0 && i % 5 === 0) {
        boxesContainer.innerHTML += '<div class="box">FizzBuzz</div>';
    } else if (i % 3 === 0) {
        boxesContainer.innerHTML += '<div class="box">Fizz</div>';
    } else if (i % 5 === 0) {
        boxesContainer.innerHTML += '<div class="box">Buzz</div>';
    } else {
        boxesContainer.innerHTML += `<div class="box">${i}</div>`;
    }
}