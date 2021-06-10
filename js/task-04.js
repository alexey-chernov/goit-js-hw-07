let counterValue = document.getElementById('value');

const buttons = document.querySelectorAll('button');
const decBtn = buttons[0];
const inkBtn = buttons[1];

const increment = () => {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
};

inkBtn.addEventListener('click', increment);

const decrement = () => {
    counterValue.textContent = parseInt(counterValue.textContent) - 1;
};

decBtn.addEventListener('click', decrement);

