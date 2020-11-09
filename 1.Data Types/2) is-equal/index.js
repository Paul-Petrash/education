function isEqual(a, b) {
	// Напиши свой код здесь
	if (a === null || b === null) {
		return false;
	}
	if (typeof a === 'object' && typeof b === 'object') {
		if (Object.entries(a).length === 0 && Object.entries(b).length === 0) {
			return true;
		}
		const aKey = Object.entries(a).map(([key, value]) => key)[0];
		const aValue = Object.entries(a).map(([key, value]) => value)[0];
		const bKey = Object.entries(b).map(([key, value]) => key)[0];
		const bValue = Object.entries(b).map(([key, value]) => value)[0];
		console.log(aKey, aValue, bKey, bValue);
		if (aKey === bKey) {
			if (aValue === bValue) {
				return true;
				// Код снизу повторяет код сверху, придумать функцию через this
			} else if (typeof aValue === 'object' && typeof bValue === 'object') {
				const aValueKey = Object.entries(aValue).map(([key, value]) => key)[0];
				const aValueValue = Object.entries(aValue).map(([key, value]) => value)[0];
				const bValueKey = Object.entries(bValue).map(([key, value]) => key)[0];
				const bValueValue = Object.entries(bValue).map(([key, value]) => value)[0];
				if (aValueKey === bValueKey) {
					if (aValueValue === bValueValue) {
						return true;
					} else {
						return false;
					}
				} else {
				return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
};


window.isEqual = isEqual;

export default isEqual;
