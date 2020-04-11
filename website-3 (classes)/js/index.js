const start = async () => {
  try {
    const DATA = await requestMaker.makeGetRequestReturnsPromise('https://gist.githubusercontent.com/NearFutureBand/cb7456a2e8838e4fb7b6ec73d5008fb0/raw/63d881300f26adbc1ef058328e163d64c0e6e305/json-template-data');
    const cardList = new CardList(JSON.parse(DATA));
    cardList.render();
  } catch (err) {
    console.log('Something went wrong', err);
  }
}

start();







