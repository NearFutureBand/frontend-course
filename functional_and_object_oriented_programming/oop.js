class Human {

  constructor(age, name) {
    this._age = age;
    this.name = name;
    this._private = 3;
  }

  hello() {
    console.log(`Hello, I'm ${this.name}, ${this._age} y.o.`);
  }

  set age(newValue) {
    if (this._isAgePositive(newValue)) {
      this._age = newValue;
    }
  }
  get age() {
    return this._age;
  }
  // инкапсуляция
  _isAgePositive(age) {
    return age > 0;
  }
}

const human1 = new Human(20, 'Dave');

// наследование
class Programmer extends Human {
  constructor(age, name, level) {
    super(age, name);
    this.level = level;
  }

  // полиморфизм
  hello() {
    super.hello();
    console.log('Im a programmer');
  }

  static staticMethod() {
    console.log('static method');
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

class Teacher extends Human {
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
//tr1.hello();

