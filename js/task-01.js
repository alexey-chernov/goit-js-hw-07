const navCategoryEl = document.querySelector('ul#categories');
const categoryElementsCount = navCategoryEl.childElementCount;
console.log(`У списку ${categoryElementsCount} категорії.`);


const titles = navCategoryEl.querySelectorAll('.item');

const elemBytitle = titles.forEach((elem) => {
    console.log(`Категорія: ${elem.querySelector('h2').textContent}`);
    console.log(`Кількість елементів: ${elem.querySelectorAll('li').length}`);
});
