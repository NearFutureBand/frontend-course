
// Для случая с forEach
function renderCard1(obj) {
  return `
    <div class="card">
      <h2>${obj.name.first} ${obj.name.last}</h2>
      <h3>${obj.email}</h3>
      <span>${obj.about}</span>
    </div>
  `;
}

// Для случая с reduce
//function renderCard2()

function renderList() {

  const wrapperNode = document.createElement('div');
  wrapperNode.className = 'wrapper';


  // {1}
  let wrapperInnerHtml = '';
  DATA.forEach(element => {
    wrapperInnerHtml += renderCard1(element);
  });

  // {1}
  /*const wrapperInnerHtml = DATA.reduce(obj => {
    return renderCard(obj);
  });*/
  wrapperNode.innerHTML = wrapperInnerHtml;

  try {
    // Берем референс на html тэг
    // нулевой элемент потому что getElementsByTagName возвращает массив
    // так как некоторых тэгов может быть несколько в DOM
    // но html тэг только один и мы гарантированно знаем что он нулевой 
    console.log(document.getElementsByTagName('body'));
    const $body = document.getElementsByTagName('body')[0];

    // По какой-то причине может оказаться что тэг не нашелся,
    // Эту ошибку можно отследить и не дать всему сайту упасть
    // Если $body это undefined или null, то есть !undefined это true
    // и !null это тоже true, то пробросить ошибку напрямую в блок catch
    // после throw можно указывать любую переменную / объект, который нам было бы
    // полезно обратить внимание в случае ошибки
    if (!$body) {
      //throw $body;
      throw new Error('Тэг боди не найден: ' + $body);
      //throw new Error(`Тэг боди не найден: ${$body}`);
    }

    $body.appendChild(wrapperNode);
  } catch (err) {
    console.log(err);
  }
}

// start
console.log(DATA);
renderList();

