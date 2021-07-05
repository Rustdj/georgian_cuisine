/*const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
menu.classList.add('active');
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});*/

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu__active');
        })
    })
})