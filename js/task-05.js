const inputName = document.querySelector('input#name-input');
const nameSpan = document.querySelector('span#name-output');

inputName.addEventListener('input', changeName);

function changeName() {
    nameSpan.textContent = (inputName.value === "" || inputName.value[0] === " ") ? 'незнайомець' : inputName.value;
}