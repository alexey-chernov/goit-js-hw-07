const inputTarget = document.querySelector('input#validation-input');

inputTarget.addEventListener('blur', targetCheck);

function validation(isValid) {
    return isValid ? { toAdd: 'valid', toRemove: 'invalid' } : { toAdd: 'invalid', toRemove: 'valid' }
}

function targetCheck() {
    const actions = validation(inputTarget.value.length == inputTarget.getAttribute('data-length'));
    inputTarget.classList.add(actions.toAdd);
    inputTarget.classList.remove(actions.toRemove);
}