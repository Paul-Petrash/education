
/**
 * @name Full-sum
 * @task
 * Написать функцию суммирования, которая будет суммировать все аргументы и возвращять результат
 * Если хотя бы один из арументов не является числом, сгенерировать ошибку c сообщением: "Wrong Argument Type"
 * Если аргументов не будет, пусть вернется 0
 * @param args
 */
const a = 9;


function fullSum(...args) {
  // Напиши свой код здесь
  let sum = 0;
  function isNumber(value) {
	return typeof value === 'number';
  };
  if (args.length === 0) {
	return sum = 0;
  }

  for (let i = 0; i < args.length; i++) {
	if (isNaN(args[i]) || !isNumber(args[i])) {
		throw new Error('Wrong Argument Type');
	} else {
		sum = sum + args[i];
	}
  }

  console.log('LOOOOG', args, a);
  return sum;
}

window.fullSum = fullSum;

export default fullSum;
