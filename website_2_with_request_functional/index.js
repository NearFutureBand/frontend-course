
// Функции выполняющие запрос
const makeGetRequestWithCallback = (url, callback) => {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(null, xmlHttp.responseText);
    }
    if (xmlHttp.readyState === 4 && xmlHttp.status !== 200) {
      callback(new Error('Request error'));
    }
  }
  xmlHttp.open("GET", url, true); // true for asynchronous 
  xmlHttp.send(null);
}

const makeGetRequestReturnsPromise = (url) => {
  return new Promise((resolve, reject) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        resolve(xmlHttp.responseText);
      }
      if (xmlHttp.readyState === 4 && xmlHttp.status !== 200) {
        reject(new Error('Request error'));
      }
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
  });
}

// Функции отрисовки
const renderCard = (obj) => {
  return `
    <div class="card">
      <div class="left">
        <img src="./avatar-mock-${Math.floor(Math.random() * 3 + 1)}.png" width=80rem" height=80rem" />
      </div>
      <div class="right">
        <h2>${obj.name.first} ${obj.name.last}</h2>
        <h4>${obj.email}</h4>
      </div>
    </div>
  `;
}

const renderList = (DATA) => {
  const wrapperNode = document.createElement('div');
  wrapperNode.className = 'wrapper';

  const wrapperInnerHtml = DATA.reduce((wrapperInnerHtml, element) => {
    return wrapperInnerHtml += renderCard(element);
  }, '');
  wrapperNode.innerHTML = wrapperInnerHtml;

  const $body = document.getElementsByTagName('body')[0];
  $body.appendChild(wrapperNode);
}

// Функции запуска
const startWithCallback = () => {
  makeGetRequestWithCallback(
    'https://gist.githubusercontent.com/NearFutureBand/cb7456a2e8838e4fb7b6ec73d5008fb0/raw/63d881300f26adbc1ef058328e163d64c0e6e305/json-template-data',
    (err, response) => {
      if (!err) {
        renderList(JSON.parse(response));
      } else {
        console.log(`error in request's callback`, err);
      }
    }
  )
}

const startWithPromise = () => {
  makeGetRequestReturnsPromise('https://gist.githubusercontent.com/NearFutureBand/cb7456a2e8838e4fb7b6ec73d5008fb0/raw/63d881300f26adbc1ef058328e163d64c0e6e305/json-template-data')
    .then(response => {
      renderList(JSON.parse(response));
    }).catch(err => {
      console.log('promise error', err);
    });
}

const startWithAsyncAwait = async () => {
  const DATA = await makeGetRequestReturnsPromise('https://gist.githubusercontent.com/NearFutureBand/cb7456a2e8838e4fb7b6ec73d5008fb0/raw/63d881300f26adbc1ef058328e163d64c0e6e305/json-template-data');
  renderList(JSON.parse(DATA));
}

//startWithCallback();
//startWithPromise();
startWithAsyncAwait();
//start with async/await 2
// Анонимная асинхронная самовызывающаяся функция
/*(async () => {
  const DATA = await getCardsData();
  renderList(JSON.parse(DATA));
})();*/






