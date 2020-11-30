// ====================
// Простые типы
// ====================
var greeting = 'Hello world!';
console.log(greeting);
// number, string, boolean, undefined, null, object,
// any, never, void
typeof greeting;
// ====================
// Массивы и объекты
// ====================
var array1 = [1, 2, 3];
var array2 = [3, 4, 5];
var tuple = [1, 'Name'];
var object1 = {
    a: 1,
    b: 'str',
    c: true
};
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var actionTypes;
(function (actionTypes) {
    actionTypes["PLUS"] = "PLUS";
    actionTypes["GET_USERS"] = "GET_USERS";
    actionTypes["LOGIN_START"] = "LOGIN_START";
})(actionTypes || (actionTypes = {}));
var user1 = {
    id: 1,
    phone: '+375291112233',
    fullAccess: false,
    friends: [2, 3],
    name: {
        first: 'Elon',
        last: 'Musk',
    },
    avatar: 'https://adsadadasdas/asd/ad.png'
};
var user2 = {
    id: 2,
    phone: '+375291112233',
    fullAccess: false,
    friends: [5, 7],
    name: {
        first: 'Jeff',
        last: 'Bezos',
    },
};
var admin1 = {
    id: 3,
    phone: '+375291112233',
    fullAccess: false,
    friends: [5, 7],
    name: {
        first: 'Jeff',
        last: 'Bezos',
    },
    key: 'password'
};
// ====================
// Функции
// ====================
// Описание типов для стрелочной функции
var f1 = function (a, b) {
    return a + " and " + b;
};
// Описание типов для обычной функции
function f2(a, b) {
    return a > b;
}
// Функция которая ничего не возвращает
var f3 = function (name) {
    console.log("Hello " + name + "!");
};
// Параметры по умолчанию
var f5 = function (a) {
    if (a === void 0) { a = 5; }
    var result = "I'm " + 5;
    console.log(result);
};
//  необязательные параметры
var f6 = function (a, b) {
    console.log(a, b);
};
var f7 = function (a, b) {
    return undefined;
};
// Функция которая никогда не может быть завершена
var f4 = function () {
    throw new Error("everything's broken");
};
// ====================
// Классы и наследование
// ====================
var Human = /** @class */ (function () {
    function Human(age, name) {
        this._age = age;
        this.name = name;
    }
    Human.prototype.hello = function () {
        console.log("Hello, I'm " + this.name + ", " + this.age + " y.o.");
    };
    Object.defineProperty(Human.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newValue) {
            if (this.isAgePositive(newValue)) {
                this._age = newValue;
            }
        },
        enumerable: false,
        configurable: true
    });
    // инкапсуляция
    Human.prototype.isAgePositive = function (age) {
        return age > 0;
    };
    return Human;
}());
var human1 = new Human(20, 'Dave');
console.log(human1.age);
human1.age = -1;
console.log(human1.age);
human1.age = 21;
console.log(human1.age);
// наследование
/*class Programmer extends Human {
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
