const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const list = document.querySelector('#ingredients');

const ingredientsLiEl = options => {
    return options.map(ingredient => {
        const item = document.createElement('li');
        item.textContent = ingredient;
        return item;
    });
};

const elements = ingredientsLiEl(ingredients);

document.querySelector('#mainButton').onclick = () => list.append(...elements);