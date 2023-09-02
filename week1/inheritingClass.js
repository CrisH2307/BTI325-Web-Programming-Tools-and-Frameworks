class Job {
  #name;
  #age;
  #occupation;

  constructor(setName = "", setAge = 0) {
    this.#name = setName;
    this.#age = setAge;
  }

  set name(newName) {
    this.#name = newName;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

class Architect extends Job {
  #occupation = "architect";

  constructor(setName = "", setAge = 0) {
    super(setName, setAge); // invoke the "parent" constructor
  }

  #privateMethod() {
    console.log("I'm a private method");
  }
}

let architect1 = new Architect("Joe", 34);
console.log(architect1.name);

Job.prototype.sayHello = function () {
  console.log("Hello from Job!");
};

architect1.sayHello(); // Hello from Job!
