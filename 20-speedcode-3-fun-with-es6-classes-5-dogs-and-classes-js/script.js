"use strict";
class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

// Solution 1 with super(best practice).
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}

const lab1 = new Labrador("rex", 3, "male", "rambo");
console.log(lab1);

// Solution 2 (clever) using Object.assign:

class Labrador2 {
  constructor(name, age, gender, master) {
    Object.assign(
      this,
      new Dog(name, age, gender, "Labrador", "Large", master, true)
    );
  }
}

const lab2 = new Labrador2("rex2", 4, "female", "rambo2");
console.log(lab2);

// Solution 3 (clever) using the arguments object:

class Labrador3 extends Dog {
  constructor(name, age, gender, master) {
    console.log(arguments);
    super(...arguments); //Since the original function call has name,age,gender, then species not master, the call accomplished this.species = master, so  we have to overwrite species, and we have to do this.master = master, so basically ordering of args matters so watch out.
    this.species = "Labrador";
    this.size = "Large";
    this.loyal = true;
    this.master = master;
  }
}

const lab3 = new Labrador3("rex3", 5, "male", "rambo3");
console.log(lab3);

//Refresher on how arguments work.
const add = function (a, b = 2) {
  console.log(a + b);
  console.log(arguments);
};

add(1, 4);
