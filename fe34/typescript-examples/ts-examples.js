var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Обычное описание типа массива
var array1 = [1, 2, 3];
// Обычное описание типа массива - равнозначно предыдущему
var array2 = [3, 4, 5];
// Тип tuple на случай, если массив будет содержать разные типы
var tuple = [1, 'Name'];
// Обычное описание объекта - перечисляются все свойства и их типы.
// Порядок свойств можно не соблюдать
var object1 = {
    a: 1,
    b: 'str',
    c: true
};
// Тип перечисление (enum). Используется для некоторых наборов констант,
// объединенных общим смыслом. Также используется вместо того чтобы кодировать
// какие-то понятия/сущности с помощью чисел или сокращений - потому что
// позволяет работать с человекочитаемыми названиями (повышают семантику кода)
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
// Пример enum на практике - типы для экшенов в редаксе
var actionTypes;
(function (actionTypes) {
    actionTypes["PLUS"] = "PLUS";
    actionTypes["GET_USERS"] = "GET_USERS";
    actionTypes["LOGIN_START"] = "LOGIN_START";
})(actionTypes || (actionTypes = {}));
// Пример создания объекта типа TUser
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
// Пример создания еще одного объекта типа TUser - здесь поля
// avatar уже нет, но все по-прежнему работает
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
// Пример создания такого объекта
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
// Параметр по умолчанию
var f5 = function (a) {
    if (a === void 0) { a = 5; }
    var result = "I'm " + 5;
    console.log(result);
};
// Необязательный параметр. Необязательные параметры должна
// идти после обязательных
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
// Все, пока хватит.
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
    // Инкапсуляция
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
human1.hello();
// Наследование
/**
 * Статическое свойство/метод - одно свойство/метод на весь класс. Доступ не через имя экземпляра, а через имя класса
 * Можно вызывать/получать статические методы/свойства без создания экземпляра класса
 * Статические свойства и методы также имеют модификатор доступа
 */
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(age, name, level) {
        var _this = _super.call(this, age, name) || this;
        _this.level = level;
        Programmer.staticMethod();
        return _this;
    }
    // Полиморфизм
    Programmer.prototype.hello = function () {
        _super.prototype.hello.call(this);
        console.log('Im a programmer');
    };
    Programmer.staticMethod = function () {
        console.log('One more programmer has born');
        this.numberOfprogrammers += 1;
    };
    Programmer.numberOfprogrammers = 0;
    return Programmer;
}(Human));
var prog1 = new Programmer(30, 'John', 'middle');
console.log(Programmer.numberOfprogrammers);
var prog2 = new Programmer(30, 'Kate', 'junior');
console.log(Programmer.numberOfprogrammers);
prog2.hello();
// Дальнейшее наследование
var TeamLead = /** @class */ (function (_super) {
    __extends(TeamLead, _super);
    function TeamLead(age, name, level, project) {
        var _this = _super.call(this, age, name, level) || this;
        _this.project = project;
        return _this;
    }
    TeamLead.prototype.hello = function () {
        _super.prototype.hello.call(this);
        console.log("And I'm the Team Lead! Currently I'm working on: ");
        this.showProject();
    };
    TeamLead.prototype.showProject = function () {
        console.log(this.project);
    };
    return TeamLead;
}(Programmer));
var project1 = 'Uber';
var project2 = {
    startDate: new Date(),
    endDate: new Date(),
    name: 'Yandex Maps'
};
var project3 = [100, 26, 0];
var tl1 = new TeamLead(100, 'Fedor', 'senior', project3);
tl1.hello();
