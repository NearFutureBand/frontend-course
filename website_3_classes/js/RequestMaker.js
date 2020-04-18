class RequestMaker {
  loading = false;

  makeGetRequestWithCallback = (url, callback) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
          callback(null, xmlHttp.responseText);
        } else {
          callback(new Error('Request error'));
        }
        this.loading = false;
      }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    this.loading = true;
  }

  makeGetRequestReturnsPromise = (url) => {
    return new Promise((resolve, reject) => {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
          if (xmlHttp.status === 200) {
            resolve(xmlHttp.responseText);
          } else {
            reject(new Error('Request error'));
          }
          this.loading = false;
        }
      }
      xmlHttp.open("GET", url, true);
      xmlHttp.send(null);
      this.loading = true;
    });
  }
}

const requestMaker = new RequestMaker();