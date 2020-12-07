function sumCheck(a, b) {
	// Напиши свой код здесь
	function isNumber(value) {
		return typeof value === 'number';
	};

	if (isNumber(a) && isNumber(b)) {
    	if (isNaN(a) || isNaN(b)) {
        	return NaN;
      	}
		return a + b;
	} else {
		throw new Error('Wrong arguments type!');
	}
};

window.sumCheck = sumCheck;

export default sumCheck;
