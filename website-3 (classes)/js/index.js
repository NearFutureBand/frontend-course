const start = async () => {
  try {
    const DATA = await requestMaker.makeGetRequestReturnsPromise('https://gist.githubusercontent.com/NearFutureBand/cb7456a2e8838e4fb7b6ec73d5008fb0/raw/63d881300f26adbc1ef058328e163d64c0e6e305/json-template-data');
    const dataParsed = JSON.parse(DATA);
    const cardList1 = new CardList(dataParsed, 'wrapper-1');
    cardList1.render();
    const cardList2 = new CardList(dataParsed, 'wrapper-2');
    cardList2.render();
    //setTimeout(cardList.render, 3000);
  } catch (err) {
    console.log('Something went wrong', err);
  }
}

start();







