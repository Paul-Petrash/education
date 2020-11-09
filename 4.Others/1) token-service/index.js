/*
  Задача
  Написать TokenService, в котором есть слудеющие функции
  subscribe(callback) - добавляет подписку на изменение токена (параметром будет новый токен, или null, если токен удален)
  setToken(token) - устанавливает значения токена (вызывает подписчиков)
  removeToken() - удаляет токен (вызвает подписчиков на изменеия)
  getToken() - возващяет токен
 */

class TokenService {
  // Напиши свой код здесь
  subscribe(callback) {
	  callback();
  }
  setToken(value) {

  }
  removeToken() {}
  getToken() {}

}

window.TokenService = TokenService;

export default TokenService;
