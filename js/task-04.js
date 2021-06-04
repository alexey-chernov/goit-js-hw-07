const counterValue = document.querySelector('span#value');

const changeValue = (sign) => {
    counterValue.textContent = (sign === '+') ? ++counterValue.textContent : --counterValue.textContent;
}

document.querySelector('button[data-action="increment"]').onclick = () => changeValue('+');
document.querySelector('button[data-action="decrement"]').onclick = () => changeValue('-');