(function(){
	const form = document.querySelector('.form');
	const formFieldset = form.querySelector('.form__fieldset');
	const formInput = form.querySelector('.form__input');
	const formBtn = form.querySelector('.form__btn');

	const addNewInput = function () {
		const formInputList = form.querySelectorAll('.form__input');
		const $input = formInputList[formInputList.length - 1].cloneNode(true);
		formFieldset.appendChild($input);
	};

	String.prototype.replaceAt = function(replacement, newstr) {
		let index = -1;
		while ((index = this.indexOf(replacement, index + 1)) != -1) {
		  return this.substr(0, index) + newstr + this.substr(index + replacement.length);
		}
	  };

	const transformText = function () {
		const formInputList = form.querySelectorAll('.form__input');

		for (let i = 0; i < formInputList.length; i++) {
			let $input = formInputList[i];
			let prevIndex = i - 1;
			if (prevIndex < 0) {
				prevIndex = 0;
			}
			let $prevInput = formInputList[prevIndex];
			if ($prevInput.value.includes('555', 0)) {
				$input.value = $prevInput.value.replaceAt('555', '---');
			}

			if (i == 1 || i % 2 == 1) {
				$input.value = $input.value.toUpperCase();
			} else {
				$input.value = $input.value.toLowerCase();
			}
		}
	};

	formBtn.addEventListener('click', function(evt) {
		evt.preventDefault();

		addNewInput();
		transformText();
	});
})();
