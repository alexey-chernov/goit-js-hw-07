const buttonCreate = document.querySelector('button[data-action="render"]');
const buttonClear = document.querySelector('button[data-action="destroy"]');
const userInput = document.querySelector('input');
const divBoxes = document.querySelector('div#boxes');
let startWH = 30;
function colorCreate() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

buttonCreate.addEventListener('click', () => createBoxes(userInput.value));

function createBoxes(amount) {
    if (!amount) {
        alert('Введіть число.');
        return;
    };
    if (amount < 0) amount = amount * (-1);
    for (let i = 1; i <= amount; i++) {
        const htmlString = `<div style="background-color: ${colorCreate()}; width: ${startWH}px; height: ${startWH}px"></div>`;
        startWH += 10;
        divBoxes.insertAdjacentHTML('beforeend', htmlString);
    }
};

buttonClear.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    startWH = 30;
    divBoxes.innerHTML = '<div id="boxes"></div>';
    userInput.value = 0;
};