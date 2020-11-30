// ====================
// Простые типы
// ====================
const greeting:string = 'Hello world!';
console.log(greeting);
// number, string, boolean, undefined, null, object,
// any, never, void

typeof greeting;

type theme = 'dark' | 'light' | 'new';

type userData = object | null;





























// ====================
// Массивы и объекты
// ====================

const array1: number[] =  [1,2,3];

const array2: Array<number> = [3,4,5];

const tuple: [number, string] = [1, 'Name'];

const object1: { a: number, b: string, c: boolean} = {
  a: 1,
  b: 'str',
  c: true
}

enum Colors {
  Red,
  Green,
  Blue
}

enum actionTypes {
  PLUS = 'PLUS',
  GET_USERS = 'GET_USERS',
  LOGIN_START = 'LOGIN_START'
}

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

type TAdmin = TUser & {
  key: string;
}

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

// Параметры по умолчанию
const f5 = (a: number = 5) => {
  const result: string = `I'm ${5}`;
  console.log(result);
}

//  необязательные параметры
const f6 = (a: number, b?: string):void => {
  console.log(a,b);
}

// отдельно вынесенный тип функции
type Tf7 = (a: number, b:string) => undefined;

const f7:Tf7 = (a, b) => {
  return undefined;
}


// Функция которая никогда не может быть завершена
const f4 = (): never => {
  throw new Error("everything's broken");
}
















































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
