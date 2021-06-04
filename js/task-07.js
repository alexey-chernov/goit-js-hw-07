const inputTarget = document.querySelector('input#font-size-control');
const textSpan = document.querySelector('span#text');

inputTarget.addEventListener('input', changeFont);

function changeFont() {
    textSpan.style.fontSize = `${inputTarget.value}px`;
}