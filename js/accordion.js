document.querySelectorAll('.faq__accordion-trigger').forEach(function (item) {
	item.addEventListener('click', () => {
		console.log(1);
		const parent = item.parentNode;
		parent.classList.toggle('faq__accordion-item_active');
	})
}
)