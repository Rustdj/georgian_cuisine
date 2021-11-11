// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//           menuItem = document.querySelectorAll('.menu'),
//           hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger__active');
//         menu.classList.toggle('menu__active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger__active');
//             menu.classList.toggle('menu__active');
//         })
//     })  
// })


// // Tabs

// const tabsBtn = document.querySelectorAll('.header__btn');
// const tabsItem = document.querySelectorAll('.products-grid__item');


// tabsBtn.forEach(onTabClick); 

// function onTabClick (item) {
//     item.addEventListener( 'click', () => {
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute('data-tab');
//         let currentTab = document.querySelector(tabId);

//         tabsBtn.forEach( (item) => {
//             item.classList.remove('active');
//         });

//         tabsItem.forEach( (item) => {
//             item.classList.remove('active');
//         });

//         currentBtn.classList.add('active');
//         currentTab.classList.add('active');
        
//     });
// }

// document.querySelector('.header__btn').click();


// Product cart

const product = document.querySelectorAll('.product');

if (product) {
    product.forEach(el => {
        let currentProduct = el;
        const imageSwitchItems = currentProduct.querySelectorAll('.image-switch__item');
        const imagePagination = currentProduct.querySelector('.image-pagination');
        if (imageSwitchItems.length > 1) {
            imageSwitchItems.forEach((el, index) => {
                el.setAttribute('data-index', index);
                imagePagination.innerHTML += `<div class="image-pagination__item ${index == 0 ? 'image-pagination__item-active' : ''}"  data-index='${index}'></div>`;
                el.addEventListener('mouseenter', (e) => {
                    currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {el.classList.remove('image-pagination__item-active')});
                    currentProduct.querySelector(`.image-pagination__item[data-index='${e.currentTarget.dataset.index}']`).classList.add('image-pagination__item-active');
                });
                el.addEventListener('mouseleave', (e) => {
                    currentProduct.querySelectorAll('.image-pagination__item').forEach(el => {el.classList.remove('image-pagination__item-active')});
                    currentProduct.querySelector(`.image-pagination__item[data-index='0']`).classList.add('image-pagination__item-active');
                });
            });
            
        }
        
    });
}


// grid

const fixedBlock = document.querySelector('.filters-price'),
      filters = document.querySelector('.filters'),
      gutter = parseInt(getComputedStyle(document.documentElement).getPropertyValue('$gutter')),
      container = document.querySelector('.container'),
      offsetLeft = container.offsetLeft + gutter;
      filtersOffsetTop = filters.offsetTop,
      filtersWidth = filters.offsetWidth,
      smallOffset = gutter;


const fixedScrollBlock = () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > (filtersOffsetTop - smallOffset) && scrollDistance <= (filters.offsetHeight + filtersOffsetTop))  {
        fixedBlock.style.left = `${offsetLeft}px`;
        fixedBlock.style.width = `${filtersWidth}px`;
        fixedBlock.classList.remove('absolute');
        fixedBlock.classList.add('fixed');
    } else {
        fixedBlock.style.left = `0px`;
        fixedBlock.style.width = `100%`;
        fixedBlock.classList.remove('fixed');
    }

    if (scrollDistance >= (filtersOffsetTop - smallOffset) + filters.offsetHeight - fixedBlock.offsetHeight) {
        fixedBlock.classList.add('absolute');
        fixedBlock.style.left = `0px`;
        fixedBlock.style.width = `100%`;
        fixedBlock.classList.remove('fixed');
    }
};

window.addEventListener('scroll', fixedScrollBlock);

// Cart

const productsBtn = document.querySelectorAll('.product__btn');
const cartProductList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.fullprice');
let price = 0; // для выводв количества товаров в корзине
let productArray = [];

const randomId = () => { // связывает кнопки
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {  // удаляет пробелы у строки с ценой
    return str.replace(/\s/g, '');
};

const normalPrice = (str) => {  // преобразует строку с суммой с пробелом '23 234 ₽'
    return String(str).replace(/(\d)(?=(\d\d\d)+([ˆ\d]|$))/g, '$1 ');
};


const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`
};

const printQuantity = () => {
    let length = cartProductList.querySelector('.simplebar-content').children.length;
    cartQuantity.textContent = length;
    length > 0 ? cart.classList.add('active') : cart.classList.remove('active')
};


const generateCartProduct = (img, title, price, id) => {
    return `

        <li class="cart-content__item">
        <article class="cart-content__product cart-product" data-id='${id}'>
            <img src="${img}" alt="Макбук" class="cart-product__img">
                <div class="cart-product__text">
                <h3 class="cart-product__title">${title}</h3>
            <span class="cart-product__price">${normalPrice(price)} ₽</span>
            </div>
            <button class="cart-product__delete" aria-label="Удалить товар"></button>
            </article>
        </li>
    `;
};