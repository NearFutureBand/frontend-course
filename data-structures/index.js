// ======================================
// List / Set - простые списки - аналог массива, у Set все значения уникальные
// ======================================

class List {

  constructor() {
    this.memory = [];
    this.length = 0;
  }

  /**
   * Первое - способ получения данных
   * Сложность операции доступа к данным - константа. O(1) - "AWESOME!!"
   */

  get(address) {
    return this.memory[address];
  }

  /**
   * Так как списки имеют упорядоченную структуру хранения мы можем добавлять данные в начало, в середину или конец списка.
   * Здесь имплементированы только операции добавления и удаления данных из начала и конца списка, то есть такие методы:
   *   - Push    - Добавить значение в конец
   *   - Pop     - Удалить значение с конца
   *   - Unshift - Добавить значение в начало
   *   - Shift   - Удалить значение из начала (первое)
   */

  /*
   * Это метод добавления данных в конец. Тут все просто, потому что индекс элемента который сейчас будет добавлен - это текущая длина списка (this.length)
   * Сложность добавления данных в конец - константа O(1) - "AWESOME!!"
   */

  push(value) {
    this.memory[this.length] = value;
    this.length++;
  }

  /**
   * Удаление данных с конца.
   * Индекс последнего элемента - this.length - 1, его нужно вернуть и удалить из памяти.
   * Сложность операции pop -  O(1) - "AWESOME!!"
   */

  pop() {
    // Ничего не делать, если элементов в списке нет
    if (this.length === 0) return;

    // Получить последнее значение, перестать его хранить и вернуть его
    let lastAddress = this.length - 1;
    let value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    // Также вернуть удаляемое значение чтобы его можно было использовать
    return value;
  }

  /**
   * Так как нужно добавть новый элемент в начало нашего списка, нам необходимо сначала освободить для него место в начале (в нулевом индексе), смещая все элементы на один вправо.
   * Тут на схеме вставляется значение Х
   * 
   *     [a, b, c, d, e]   (до)
   *      0  1  2  3  4
   *       ⬊  ⬊  ⬊  ⬊  ⬊
   *         1  2  3  4  5
   *     [x, a, b, c, d, e]   (после)
   *
   * Поэтому придется проходиться по всем элементам чтобы передвигать их значения на индекс вперед. Сложность тут становится ЛИНЕЙНОЙ - O(N) - "OKAY."
   */

  unshift(value) {
    // Сохраняем значение которое планируем добавить
    let previous = value;

    // Пробегаемся по всем значениям...
    for (let address = 0; address < this.length; address++) {
      // заменяем "current" (текущее) значение предыдущим ("previous") и сохраняем текущее для следующей итерации
      let current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    // Добавляем бывший последний элемент в новую позицию в конце списка (размер массива стал на единицу больше и это действие не умещается в цикл)
    this.memory[this.length] = previous;
    this.length++;
  }

  /**
   * Unshift - удаление элемента из начала списка и смещение всех оставшихся на одну позицию влево
   *
   *     [x, a, b, c, d, e] (до)
   *         1  2  3  4  5
   *       ⬋  ⬋  ⬋  ⬋  ⬋
   *      0  1  2  3  4
   *     [a, b, c, d, e]  (после)
   *
   * Сложность операции ЛИНЕЙНАЯ: O(N) - "OKAY."
   */

  shift() {
    // Ничего не делать, если элементов в списке нет
    if (this.length === 0) return;

    let value = this.memory[0];

    // Пробегаемся по всем значениям...
    for (let address = 0; address < this.length - 1; address++) {
      // и заменяем каждый элемент ледующим элементом списка
      this.memory[address] = this.memory[address + 1];
    }

    // Удаляем последний элемент (после цикла последний и предпоследний элементы одинаковые и длина списка должна уменьшиться на единицу)
    delete this.memory[this.length - 1];
    this.length--;

    return value;
  }
}

// ===============================================================
// Хэш таблица 
// ===============================================================
/**
 * Хэш-таблица это структура данных которая "неупорядочена". Вместо индексов в списке у нас есть "ключи" и "значения" и адреса памяти где хранятся значения вычисляются по ключам.
*/

class HashTable {

  // В качестве "памяти" снова выступает обычный JS-массив
  constructor() {
    this.memory = [];
  }

  /**
   * In order to store key-value pairs in memory from our hash table we need a
   * way to take the key and turn it into an address. We do this through an
   * operation known as "hashing".
   *
   * Basically it takes a key and serializes it into a unique number for that
   * key.
   *
   *    hashKey("abc") =>  96354
   *    hashKey("xyz") => 119193
   *
   * You have to be careful though, if you had a really big key you don't want
   * to match it to a memory address that does not exist.
   *
   * So the hashing algorithm needs to limit the size, which means that there
   * are a limited number of addresses for an unlimited number of values.
   *
   * The result is that you can end up with collisions. Places where two keys
   * get turned into the same address.
   *
   * Any real-world hash table implementation would have to deal with this,
   * however, we are just going to glaze over it and pretend that doesn't happen.
   */

  /**
   * Хэш-функция для вычисления адреса по ключу. Не надо париться, если не понятно как она работает,
   * достаточно просто знать что она принимает строку на вход и возвращает уникальный (чаще всего) адрес который мы заюзаем в остальных методах
   */

  hashKey(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      // Хоба - магия
      let code = key.charCodeAt(index);
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }

  // Функция получения значения - по ключу. Сложность постоянная -  O(1) - "AWESOME!!"
  get(key) {
    // Превращаем ключ в адрес
    let address = this.hashKey(key);
    // Потом возвращаем то что там лежит по этому адресу
    return this.memory[address];
  }

  // Функция добавления значения. Сложность также константа - O(1) - "AWESOME!!"
  set(key, value) {
    // Снова превращаем ключ в адрес
    let address = this.hashKey(key);
    // Дальше просто устанавливаем значение по этому адресу
    this.memory[address] = value;
  }

  // Метод для удаления данных - сложность снова константа - O(1) - "AWESOME!!"
  remove(key) {
    // Как всегда превращаем ключ в адрес
    let address = this.hashKey(key);
    // Затем, если значение по этому адресу существует, удаляем его
    if (this.memory[address]) {
      delete this.memory[address];
    }
  }
}

// ===============================================================
// Граф
// ===============================================================
/**
 * Схематичное представление:
 *
 *     A –→ B ←–––– C → D ↔ E
 *     ↑    ↕     ↙ ↑     ↘
 *     F –→ G → H ← I ––––→ J
 *          ↓     ↘ ↑
 *          K       L
 *
 * У нас есть несколько "узлов" (A, B, C, D, ...) которые соеденены линиями.
 * Узлы будут выглядеть примерно вот так:
 *
 *     Node {
 *       value: ...,
 *       lines: [(Node), (Node), ...]
 *     }
 *
 * А весь граф примерно так:
 *
 *     Graph {
 *       nodes: [
 *         Node {...},
 *         Node {...},
 *         ...
 *       ]
 *     }
 */

class Graph {

  // Будем хранить все узлы в обычном js-массиву. Не потому что они нужны нам в каком-то порядке, а потому, что нужно хранить ссылки на всех
  constructor() {
    this.nodes = [];
  }

  // Добавлять значения в граф можно создавая узлы пока без всяких линий
  addNode(value) {
    return this.nodes.push({
      value,
      lines: []
    });
  }

  /**
   * Далее нужен метод поиска узла в графе. Чаще всего у вас будет какая-то другая структура данных чтобы осуществлять поиск более эффективно.
   * В нашем случае поиск будет простой, в лоб, с пробежкой через все узлы. Эт помедленнее, но сейчас достаточно
   */

  find(value) {
    return this.nodes.find(node => {
      return node.value === value;
    });
  }

  // Теперь можно соединять два узла созданием "связи" от одного к другому
  addLine(startValue, endValue) {
    // Найти оба узла с данными значениями
    let startNode = this.find(startValue);
    let endNode = this.find(endValue);

    // Психануть если один из них не нашелся
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    // Добавить ссылку из startNode в endNode
    startNode.lines.push(endNode);
  }
}

/**
 * Finally you can use a graph like this:
 *
 *     var graph = new Graph();
 *     graph.addNode(1);
 *     graph.addNode(2);
 *     graph.addLine(1, 2);
 *     var two = graph.find(1).lines[0];
 *
 * This might seem like a lot of work to do very little, but it's actually a
 * quite powerful pattern, especially for finding sanity in complex programs.
 *
 * They do this by optimizing for the connections between data rather than
 * operating on the data itself. Once you have one node in the graph, it's
 * extremely simple to find all the related items in the graph.
 *
 * Tons of things can be represented this way, users with friends, the 800
 * transitive dependencies in a node_modules folder, the internet itself is a
 * graph of webpages connected together by links.
 */

// Односвязный список

/**
 * Next we're going to see how a graph-like structure can help optimize ordered
 * lists of data.
 *
 * Linked lists are a very common data structure that is often used to
 * implement other data structures because of its ability to efficiently add
 * items to the start, middle, and end.
 *
 * The basic idea of a linked list is similar to a graph. You have nodes that
 * point to other nodes. They look sorta like this:
 *
 *     1 -> 2 -> 3 -> 4 -> 5
 *
 * Visualizing them as a JSON-like structure looks like this:
 *
 *     {
 *       value: 1,
 *       next: {
 *         value: 2,
 *         next: {
 *           value: 3,
 *           next: {...}
 *         }
 *       }
 *     }
 */

class LinkedList {

  /**
   * Unlike a graph, a linked list has a single node that starts off the entire
   * chain. This is known as the "head" of the linked list.
   *
   * We're also going to track the length.
   */

  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * First we need a way to retrieve a value in a given position.
   *
   * This works differently than normal lists as we can't just jump to the
   * correct position. Instead, we need to move through the individual nodes.
   */

  get(position) {
    // Throw an error if position is greater than the length of the LinkedList
    if (position >= this.length) {
      throw new Error('Position outside of list range');
    }

    // Start with the head of the list.
    let current = this.head;

    // Slide through all of the items using node.next until we reach the
    // specified position.
    for (let index = 0; index < position; index++) {
      current = current.next;
    }

    // Return the node we found.
    return current;
  }

  /**
   * Next we need a way to add nodes to the specified position.
   *
   * We're going for a generic add method that accepts a value and a position.
   */

  add(value, position) {
    // First create a node to hold our value.
    let node = {
      value,
      next: null
    };

    // We need to have a special case for nodes being inserted at the head.
    // We'll set the "next" field to the current head and then replace it with
    // our new node.
    if (position === 0) {
      node.next = this.head;
      this.head = node;

      // If we're adding a node in any other position we need to splice it in
      // between the current node and the previous node.
    } else {
      // First, find the previous node and the current node.
      let prev = this.get(position - 1);
      let current = prev.next;
      // Then insert the new node in between them by setting its "next" field
      // to the current node and updating the previous node's "next" field to
      // the new one.
      node.next = current;
      prev.next = node;
    }

    // Finally just increment the length.
    this.length++;
  }

  /**
   * The last method we need is a remove method. We're just going to look up a
   * node by its position and splice it out of the chain.
   */

  remove(position) {
    // We should not be able to remove from an empty list
    if (!this.head) {
      throw new Error('Removing from empty list')
    }
    // If we're removing the first node we simply need to set the head to the
    // next node in the chain
    if (position === 0) {
      this.head = this.head.next;

      // For any other position, we need to look up the previous node and set it
      // to the node after the current position.
    } else {
      let prev = this.get(position - 1);
      prev.next = prev.next.next;
    }

    // Then we just decrement the length.
    this.length--;
  }
}

// Двусвязный список


// пример X Stack ( Стэк, FILO )

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

// Очередь



// Бинарное дерево