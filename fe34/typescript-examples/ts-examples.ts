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















































// ====================
// Классы и наследование
// ====================

/**
 * 1) В классе нужно объявить типы полей (свойств).
 * 2) Модификаторы доступа public, private, protected
 * - public свойства или методы видны везде - внутри класса, у экземпляра класса и в унаследованных классах (доступ везде)
 * - private свойства или методы видны только внутри класса, к ним нельзя обратиться из экземпляра или унаследованного класса (доступ только в оригинальном классе)
 * - protected свойства или методы видны внутри класса и у унаследованных классов, но из экземпляра к ним доступа нет (внутриклассовый доступ)
 */
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

  // Инкапсуляция
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
human1.hello();

type TLevelsOfProgrammers = 'junior' | 'middle' | 'senior';

// Наследование
/**
 * Статическое свойство/метод - одно свойство/метод на весь класс. Доступ не через имя экземпляра, а через имя класса
 * Можно вызывать/получать статические методы/свойства без создания экземпляра класса
 * Статические свойства и методы также имеют модификатор доступа
 */
class Programmer extends Human {
  protected level: TLevelsOfProgrammers;
  static numberOfprogrammers: number = 0;

  constructor(age: number, name: string, level: TLevelsOfProgrammers) {
    super(age, name);
    this.level = level;
    Programmer.staticMethod();
  }

  // Полиморфизм
  public hello():void {
    super.hello();
    console.log('Im a programmer');
  }

  static staticMethod():void {
    console.log('One more programmer has born');
    this.numberOfprogrammers += 1;
  }
}

/*
const prog1 = new Programmer(30, 'John', 'middle');
console.log(Programmer.numberOfprogrammers);
const prog2 = new Programmer(30, 'Kate', 'junior');
console.log(Programmer.numberOfprogrammers);
prog2.hello();
*/


// Дальнейшее наследование
class TeamLead<TProject> extends Programmer {
  public project: TProject;

  constructor(age: number, name: string, level: TLevelsOfProgrammers, project: TProject) {
    super(age, name, level);
    this.project = project;
  }

  // Снова полиморфизм
  hello() {
    super.hello();
    console.log(`And I'm the Team Lead! Currently I'm working on: `);
    this.showProject();
  }

  public showProject () {
    console.log(this.project);
  }
}

const project1 = 'Uber';
const project2 = {
  startDate: new Date(),
  endDate: new Date(),
  name: 'Yandex Maps'
};
const project3 = [100,26,0];

//const tl1 = new TeamLead(100, 'Fedor', 'senior');
//tl1.hello();





















// ====================
// Интерфейсы
// ====================

/*

interface IProject {};
interface IWebsite extends IProject {};
interface IDatabase extends IProject {};

/*
interface IHuman {
  name: string;
  age: number;
}

interface IProgrammer extends IHuman {
  level: TLevelsOfProgrammers;
  certificates: object[];
  knownTechnologies: string[];
}

interface Manager extends IHuman {
  history: string[];
}

interface IFrontendDeveloper extends IProgrammer {
  createWebsite: () => IWebsite;
}

interface IBackendDeveloper extends IProgrammer {
  createDatabase: () => IDatabase;
}

interface IFullStackDeveloper extends IFrontendDeveloper, IBackendDeveloper {

}

*/