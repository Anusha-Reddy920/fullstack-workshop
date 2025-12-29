

let count = 0;
let step = 1;

const display = document.getElementById("val");

// Utility function
const updateDisplay = () => {
    display.textContent = count;
};

// Buttons
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const resetBtn = document.getElementById("reset");

const oneBtn = document.getElementById("one");
const fiveBtn = document.getElementById("five");
const tenBtn = document.getElementById("ten");

// Styling
addBtn.style.color = "green";
subBtn.style.color = "red";

// Counter actions
addBtn.addEventListener("click", () => {
    count += step;
    updateDisplay();
});

subBtn.addEventListener("click", () => {
    count -= step;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Step selection (NO count change here)
oneBtn.addEventListener("click", () => {
    step = 1;
});

fiveBtn.addEventListener("click", () => {
    step = 5;
});

tenBtn.addEventListener("click", () => {
    step = 10;
});


