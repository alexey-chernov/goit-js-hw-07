const counterValue = document.querySelector('span#value');

const changeValue = (sign) => {
    let counter = counterValue.textContent;
    counter = (sign === '+') ? ++counter : --counter;
    counterValue.textContent = counter;
}

document.querySelector('button[data-action="increment"]').onclick = () => changeValue('+');
document.querySelector('button[data-action="decrement"]').onclick = () => changeValue('-');