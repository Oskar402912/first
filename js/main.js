

const burger = document.createElement('div');
const span = document.createElement('span');
const row = document.querySelector('.header__top-row');
const menu = document.querySelector('.header__top-nav')

burger.classList.add('burger');
span.classList.add('span');

row.appendChild(burger);
burger.appendChild(span);

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})


