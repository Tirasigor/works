// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

const dropdown = document.querySelector('.dropdown');

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	//	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list_visible');
		dropdown.classList.toggle('dropdown_active')
		//       this.classList.add('dropdown__button--active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			for (let i = 0; i < dropDownList.children.length; i++) {
				console.log(9);
				dropDownList.children[i].classList.remove('dropdown__list-item_active');
			}
			e.stopPropagation();
			dropDownBtn.innerHTML = this.innerHTML;
			dropDownBtn.focus();
			//			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list_visible');
			dropdown.classList.remove('dropdown_active')
			listItem.classList.add('dropdown__list-item_active');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {

		if (e.target.classList.contains('dropdown__list') && dropDownList.classList.contains('dropdown__list_visible')) {
			//			dropDownList.classList.remove('dropdown__list_visible');
		} else
			if (e.target !== dropDownBtn) {
				//			dropDownBtn.classList.remove('dropdown__button--active');
				dropDownList.classList.remove('dropdown__list_visible');
				dropdown.classList.remove('dropdown_active')
			}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			//			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list_visible');
			dropdown.classList.remove('dropdown_active')
		}
	});
});
