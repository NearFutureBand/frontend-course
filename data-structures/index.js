// пример 1 Stack ( Стэк, FILO )

class StackNode {
  constructor(value) {
    this.value = value;
    this.linkToTheNext = null;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.n = 0;
  }

  isEmpty() {
    return this.n === 0;
  }

  size() {
    return this.n;
  }

  push(value) {
    const currentRoot = this.root;
    this.root = new StackNode(value);
    this.root.linkToTheNext = currentRoot;
    this.n++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const oldFirst = this.root;
    this.root = oldFirst.linkToTheNext;
    this.n--;
    return oldFirst.value;
  }
}

const s = new Stack();

s.push('value one');
console.log(s);
s.push('value two');
console.log(s);