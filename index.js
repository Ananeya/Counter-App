"use strict";

const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const counterNum = document.getElementById("counter-num");
let counter = 0;

increment.addEventListener("click", incrementElement);
decrement.addEventListener("click", decrementElement);
resetBtn.addEventListener("click", resetElement);

function incrementElement() {
	counter++;
	counterNum.textContent = counter;
}

function decrementElement() {
	counter--;
	counterNum.textContent = counter;
}

function resetElement() {
	counter = 0;
	counterNum.textContent = counter;
}
