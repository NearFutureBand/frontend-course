class Card {
  constructor(data, parentElementId, key) {
    this.data = data;
    this.parentElementId = parentElementId;
    this.key = key;
    this.myId = `${this.parentElementId}-card-${this.key}`;
    this.parentElement = window.document.getElementById(parentElementId);
  }

  render = () => {
    const wrapperElement = window.document.createElement('div');
    wrapperElement.className = "card";
    wrapperElement.id = this.myId;

    /**
     * name {
     *  first: 'sds',
     *  last: 'sdsd,
     * }
     */
    const { name: { first, last }, email, picture } = this.data;

    wrapperElement.innerHTML = `
      <div class="left">
        <img src="${picture}" width=80rem" height=80rem" />
      </div>
      <div class="right">
        <h2>${first} ${last}</h2>
        <h4>${email}</h4>
      </div>
    `;
    this.parentElement.appendChild(wrapperElement);
  }

  getElement = () => {
    return window.document.getElementById(this.myId);
  }

  static convertToHtml = (oneCardData) => {
    const { name, email, picture } = oneCardData;
    return `
      <div class="card">
        <div class="left">
          <img src="${picture}" width=80rem" height=80rem" />
        </div>
        <div class="right">
          <h2>${name.first} ${name.last}</h2>
          <h4>${email}</h4>
        </div>
      </div>
    `;
  }
}