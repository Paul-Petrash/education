function queryToObject(query) {
	// Напиши свой код здесь
	let obj = {};
	let arr = [];
	let str = '';

	function stringToType(value) {
	  if (value === 'false') {
		return value = false;
	  }

	  if (value === 'true') {
		return value = true;
	  }

	  if (typeof +value === 'number' && !isNaN(+value)) {
		return +value;
	  } else {
		return value;
	  }
	};

	if (query.length <= 1) {
		return obj;
	}

	if (query.includes('?', 0)) {
	  str = query.substr(1);
	  if (str.includes('&', 0)) {
		arr = str.split('&');
	  } else {
		arr[0] = str;
	  }

	  arr = arr.map((item) => {
		return item.split('=');
	  });

	  arr.forEach((item) => {
		let [key, value] = item;
		obj[key] = stringToType(value);
	  });

	  return obj;
	} else {
	  return obj;
	}
  };

window.queryToObject = queryToObject;

export default queryToObject;
