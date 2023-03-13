class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
  }
}

const developer = new Developer("Onurcan", "Akkoc", "Front-end");
console.log(
  developer.firstName + " " + developer.lastName + " " + developer.role
);
