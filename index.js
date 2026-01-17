"use strict";

const counterNum = document.getElementById("counter-num");
let count = 0;

document.addEventListener("click", (e) => {
	if (e.target.id == "increment") {
		count++;
		counterNum.textContent = count;
	} else if (e.target.id == "decrement") {
		count--;
		counterNum.textContent = count;
	} else if (e.target.id == "reset") {
		count = 0;
		counterNum.textContent = count;
	}
})






/* 

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

*/