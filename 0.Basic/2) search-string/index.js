function searchString(obj) {
  // Напиши свой код здесь
  	let resultStr = '?';

	if (Object.entries(obj).length === 0) {
		return resultStr = '';
	}

	const str = Object.entries(obj)
		.filter(([key, value]) => value !== null && value !== undefined && value !== '')
		.map((item) => item.join('='))
		.join('&');

	return resultStr + str;
}

window.searchString = searchString;

export default searchString;
