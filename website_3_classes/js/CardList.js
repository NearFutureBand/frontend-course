class CardList {
  constructor(data, key) {
    this.data = data;
    this.key = key;
  }
  render = () => {
    let $previousStateWrapper = window.document.getElementById(this.key);
    if ($previousStateWrapper) {
      $previousStateWrapper.remove();
      $previousStateWrapper = null;
    }
    const wrapperElement = window.document.createElement('div');
    wrapperElement.className = 'wrapper';
    wrapperElement.id = this.key;
    const $body = window.document.getElementsByTagName('body')[0];
    $body.appendChild(wrapperElement);

    this.data.forEach((card, i) => {
      const CardInstance = new Card(card, wrapperElement.id, i);
      CardInstance.render();
    });
  }
}