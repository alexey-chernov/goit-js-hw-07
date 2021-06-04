const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const listGallery = document.querySelector('ul#gallery');
const galleryLiEl = () => {
    let image = "";
    images.forEach(({ url, alt }) => image += `<li style="list-style: none; width:25%"><img src="${url}" width="100%" alt="${alt}"></li>`);
    listGallery.insertAdjacentHTML('beforeend', image);
    listGallery.style.display = 'flex';
    listGallery.style.flexWrap = 'wrap';
}

document.querySelector('#mainButton').onclick = () => galleryLiEl(images);