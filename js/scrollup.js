const scrollUp = document.querySelector('.scroll-up');
const offset = 200;

if (document.documentElement.scrollHeight - 400 <= window.innerHeight){
	console.log(1);
	scrollUp.style.margin = '0 0 400px 0';
}

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
	if(getTop() > offset) {
		scrollUp.classList.add('scroll-up_active');
	} else {
		scrollUp.classList.remove('scroll-up_active');
	}
})

scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});