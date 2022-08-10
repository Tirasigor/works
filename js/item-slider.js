const images = document.querySelectorAll('.tabs__column');
const sliderLine = document.querySelector('.tabs__row');
let count = 0;
let width;


let widthAdvantages;
let advantangesCount = 0;
let advantangesSlide = document.querySelector('.advantages__body');


function init() {
	width = document.querySelector('.tabs__column').offsetWidth;
	widthAdvantages = document.querySelector('.advantages__item').offsetWidth;
	count = 0;
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';

	advantangesCount = 0
	advantangesSlide.style.transform = 'translate(-' + widthAdvantages * advantangesCount + 'px)';
}

window.addEventListener('resize', init);

document.querySelector('.tabs__row').addEventListener('click', function () {
	if (screen.width <= 767) {
		count++;
		if (count >= images.length) {
			count = 0;
		}
		rollSlider();
	}
})

document.querySelector('.tabs__slider-prev').addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = images.length - 1;
	}
	rollSlider();
})

document.querySelector('.tabs__slider-next').addEventListener('click', function () {
	count++;
	if (count >= images.length) {
		count = 0;
	}
	rollSlider();
})

function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}



advantangesSlide.addEventListener('click', function () {
	if (screen.width <= 767) {
		if (advantangesCount === 0) {
			advantangesCount = 1;
			advantangesSlide.style.transform = 'translate(-' + (widthAdvantages * advantangesCount - 0.1 * widthAdvantages) + 'px)';
		}
		else {
			advantangesCount = 0;
			advantangesSlide.style.transform = 'translate(-' + widthAdvantages * advantangesCount + 'px)';
		}
	}
})