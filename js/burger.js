const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__burger-menu');

burger.addEventListener('click', (e) => {
	e.preventDefault;
	burger.classList.toggle('header__burger_active');
	burgerMenu.classList.toggle('header__burger-menu_active');
})