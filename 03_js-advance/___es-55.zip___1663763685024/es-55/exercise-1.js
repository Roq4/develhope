// Class definition

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Onurcan", "Akkoc");
console.log(developer.firstName + " " + developer.lastName);
