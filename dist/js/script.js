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


// Tabs

const tabsBtn = document.querySelectorAll('.header__btn');
const tabsItem = document.querySelectorAll('.market__wrapper');


tabsBtn.forEach(onTabClick); 

function onTabClick (item) {
    item.addEventListener( 'click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach( (item) => {
            item.classList.remove('active');
        });

        tabsItem.forEach( (item) => {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
        
    });
}

document.querySelector('.header__btn').click();


// cart

const addProduct = document.querySelectorAll('.market__wrapper');
const cart = document.querySelector('[data-link]');
let price = document.querySelector('span');

    
        const printQuantity = () => {
            addProduct.addEventListener('click', () => {
                item.forEach((item) => {
                })
                // let lenght = cartProductList.querySelector('.').children.lenght;
                // cartQuantity.textContent = lenght;
                // lenght > 0 ? cart.classList.add('active') : cart.classList.remove('active')
            })
            
        };