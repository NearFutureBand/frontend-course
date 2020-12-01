// ====================
// Простые типы
// ====================
const greeting:string = 'Hello world!';
console.log(greeting);
// number, string, boolean, undefined, null, object,
// any, never, void

typeof greeting;

// Алиас для типа - ключевое слово type. Если вдруг тип занимает много места
// можно вынести его описание отдельно.
// Здесь же - возможность перечислять какие значения может принимать переменная
// такого типа. Используется вертикальная черта. Читается как "или".
type theme = 'dark' | 'light' | 'new';

type userData = object | null;





























// ====================
// Массивы и объекты
// ====================

// Обычное описание типа массива
const array1: number[] =  [1,2,3];

// Обычное описание типа массива - равнозначно предыдущему
const array2: Array<number> = [3,4,5];

// Тип tuple на случай, если массив будет содержать разные типы
const tuple: [number, string] = [1, 'Name'];

// Обычное описание объекта - перечисляются все свойства и их типы.
// Порядок свойств можно не соблюдать
const object1: { a: number, b: string, c: boolean} = {
  a: 1,
  b: 'str',
  c: true
}

// Тип перечисление (enum). Используется для некоторых наборов констант,
// объединенных общим смыслом. Также используется вместо того чтобы кодировать
// какие-то понятия/сущности с помощью чисел или сокращений - потому что
// позволяет работать с человекочитаемыми названиями (повышают семантику кода)
enum Colors {
  Red,
  Green,
  Blue
}

// Пример enum на практике - типы для экшенов в редаксе
enum actionTypes {
  PLUS = 'PLUS',
  GET_USERS = 'GET_USERS',
  LOGIN_START = 'LOGIN_START'
}


// К примеру объединения типов объектов.
// avatar? - значит что это свойство в объете типа TUser необязательное
// имя типа специально начинается с буквы T чтобы показать что это тип
type TUser = {
  id: number;
  phone: string;
  fullAccess: boolean;
  friends: number[];
  name: {
    first: string;
    last: string;
  },
  avatar?: string;
}

// Пример создания объекта типа TUser
const user1: TUser = {
  id: 1,
  phone: '+375291112233',
  fullAccess: false,
  friends: [2,3],
  name: {
    first: 'Elon',
    last: 'Musk',
  },
  avatar: 'https://adsadadasdas/asd/ad.png'
}

// Пример создания еще одного объекта типа TUser - здесь поля
// avatar уже нет, но все по-прежнему работает
const user2: TUser = {
  id: 2,
  phone: '+375291112233',
  fullAccess: false,
  friends: [5,7],
  name: {
    first: 'Jeff',
    last: 'Bezos',
  },
}

// Новый тип на основе другого. Объединяются типы знаком &
type TAdmin = TUser & {
  key: string;
}

// Пример создания такого объекта
const admin1: TAdmin = {
  id: 3,
  phone: '+375291112233',
  fullAccess: false,
  friends: [5,7],
  name: {
    first: 'Jeff',
    last: 'Bezos',
  },
  key: 'password'
}




























// ====================
// Функции
// ====================

// Описание типов для стрелочной функции
const f1 = (a: number, b:number):string => {
  return `${a} and ${b}`;
}

// Описание типов для обычной функции
function f2(a: number , b: number ):boolean {
  return a > b;
}

// Функция которая ничего не возвращает
const f3 = (name: string): void => {
  console.log(`Hello ${name}!`);
}

// Параметр по умолчанию
const f5 = (a: number = 5) => {
  const result: string = `I'm ${5}`;
  console.log(result);
}

// Необязательный параметр. Необязательные параметры должна
// идти после обязательных
const f6 = (a: number, b?: string):void => {
  console.log(a,b);
}

// Отдельно вынесенный тип функции
type Tf7 = (a: number, b:string) => undefined;

const f7:Tf7 = (a, b) => {
  return undefined;
}


// Функция которая никогда не может быть завершена
const f4 = (): never => {
  throw new Error("everything's broken");
}















































// Все, пока хватит.
// ====================
// Классы и наследование
// ====================

class Human {
  public name: string;
  private _age: number;

  constructor(age: number, name: string) {
    this._age = age;
    this.name = name;
  }

  public hello(): void {
    console.log(`Hello, I'm ${this.name}, ${this.age} y.o.`);
  }

  public set age(newValue: number) {
    if (this.isAgePositive(newValue)) {
      this._age = newValue;
    }
  }
  public get age() {
    return this._age;
  }

  // инкапсуляция
  private isAgePositive(age: number): boolean {
    return age > 0;
  }
}

const human1 = new Human(20, 'Dave');
console.log(human1.age);
human1.age = -1;
console.log(human1.age);
human1.age = 21;
console.log(human1.age);


type levelsOfProgrammers = 'junior' | 'middle' | 'senior';

// наследование
class Programmer extends Human {
  protected level: levelsOfProgrammers;
  static numberOfprogrammers: number;

  constructor(age: number, name: string, level: levelsOfProgrammers) {
    super(age, name);
    this.level = level;
    Programmer.staticMethod();
  }

  // полиморфизм
  public hello():void {
    super.hello();
    console.log('Im a programmer');
  }

  static staticMethod():void {
    console.log('static method');
    this.numberOfprogrammers += 1;
  }
}

/*
class TeamLead extends Programmer {
  constructor(age, name, level, project) {
    super(age, name, level);
    this.project = project;
  }

  hello() {
    super.hello();
    console.log(`And I'm the Team Lead!`);
  }
}

const lead1 = new TeamLead(22, 'Alex', 'Senior', 'Proj1');
console.log(lead1);
lead1.hello();

human1.hello();


// instance экземпляр
/*const pr1 = new Programmer(25, 'Phillip', 'middle');
console.log(Programmer.numberOfProgrammers);
const pr2 = new Programmer(25, 'Phillip', 'middle');
console.log(Programmer.numberOfProgrammers);*/
//console.log(pr1.age, pr1.name, pr1.level, pr1.hello());

/*class Teacher extends Human {
  constructor(age, name, subject, level) {
    super(age, name);
    this.subject = subject;
  }

  hello() {
    super.hello();
    console.log('Im a teacher of ' + this.subject);
  }
}


const tr1 = new Teacher(30, 'G', 'math');
//tr1.hello();*/
