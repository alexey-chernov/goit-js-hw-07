const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const list = document.querySelector('ul#ingredients');
const ingredientsLiEl = (array) => {
    let text = "";
    array.forEach(ingredient => text += `<li>${ingredient}</li>`);
    list.insertAdjacentHTML('beforeend', text);
}

document.querySelector('#mainButton').onclick = () => ingredientsLiEl(ingredients);

