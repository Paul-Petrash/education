function xhrGet(url) {
  // Напиши свой код здесь

  return new Promise(function(resolve, reject) {

    let xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.responseType = 'json';

    xhr.onload = function() {
      if (this.status >= 200 && this.status <= 299) {
        resolve(this.response);
      } else {
        reject(this.response);
      }
    };

    xhr.send();
  });
}

window.xhrGet = xhrGet;

export default xhrGet;
