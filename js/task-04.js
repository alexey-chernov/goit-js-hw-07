const decBtn = document.querySelector("[data-action='decrement']");
const incBtn = document.querySelector("[data-action='increment']");
const dataCounter = document.querySelector("#value");
let counterValue = +dataCounter.textContent;

decBtn.addEventListener('click', () => {
    decrement();
});

incBtn.addEventListener('click', () => {
    increment();
});

function decrement() {
    counterValue -= 1;
    dataCounter.textContent = counterValue;
};

function increment() {
    counterValue += 1;
    dataCounter.textContent = counterValue;
};

