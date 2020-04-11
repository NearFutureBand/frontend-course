class CardList {
  constructor(data) {
    this.data = data;
  }
  render = () => {
    const wrapperElement = window.document.createElement('div');
    wrapperElement.className = 'wrapper';
    wrapperElement.id = 'wrapper-1';
    const $body = window.document.getElementsByTagName('body')[0];
    $body.appendChild(wrapperElement);

    this.data.forEach((card, i) => {
      const CardInstance = new Card(card, wrapperElement.id, i);
      CardInstance.render();
    });
  }
}