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
    const { name: { first, last }, email, about } = this.data;
    wrapperElement.innerHTML = `
      <h2>${first} ${last}</h2>
      <h3>${email}</h3>
      <span>${about}</span>
    `;
    this.parentElement.appendChild(wrapperElement);
  }

  getElement = () => {
    return window.document.getElementById(this.myId);
  }

  static convertToHtml = (oneCardData) => {
    const { name, email, about } = oneCardData;
    return `
      <div class="card">
        <h2>${name.first} ${name.last}</h2>
        <h3>${email}</h3>
        <span>${about}</span>
      </div>
    `;
  }
}