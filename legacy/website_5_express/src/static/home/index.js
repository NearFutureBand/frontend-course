
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

// Вспомогательные функции
const assignAvatar = (obj) => {
  const pictureNumber = Math.ceil(Math.random() * 200);
  return {
    ...obj,
    picture: `https://api.adorable.io/avatars/${pictureNumber}.png`,
    pictureNumber,
  }
}

// Функции отрисовки
const renderCard = (obj) => {
  return `
    <div class="card" href="/user/${obj.pictureNumber}">
      <div class="left">
        <img src="${obj.picture}" width=80rem" height=80rem" />
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

// Запуск
(async () => {
  const DATA = await makeGetRequestReturnsPromise('https://gist.githubusercontent.com/NearFutureBand/cb7456a2e8838e4fb7b6ec73d5008fb0/raw/63d881300f26adbc1ef058328e163d64c0e6e305/json-template-data');
  const dataParsed = JSON.parse(DATA);
  const dataWithAvatars = dataParsed.map(person => assignAvatar(person));
  renderList(dataWithAvatars);
})();






