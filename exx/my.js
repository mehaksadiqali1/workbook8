
class Person {
    constructor(first, last) {
      this.first = first;
      this.last = last;
    }
  
    displayFullName() {
      console.log(`${this.first} ${this.last}`);
    }
  }
  
  // Creating instances of the Person class
  let person = new Person("Freddie", "Gibbs");
  let anotherPerson = new Person("Fred", "Flintstone");
  
  console.log(person);
  console.log(anotherPerson);
  
  person.displayFullName(); // Output: Freddie Gibbs
  anotherPerson.displayFullName(); // Output: Fred Flintstone
  
  // Class definition for Employee that extends Person
  class Employee extends Person {
    constructor(id, firstName, lastName, jobTitle, payRate) {
      // Call the Person constructor
      super(firstName, lastName);
      this.employeeId = id;
      this.jobTitle = jobTitle;
      this.payRate = payRate;
    }
  
    // Method to display employee details
    displayEmployeeDetails() {
      console.log(`Employee ID: ${this.employeeId}`);
      console.log(`Full Name: ${this.first} ${this.last}`);
      console.log(`Job Title: ${this.jobTitle}`);
      console.log(`Pay Rate: $${this.payRate.toFixed(2)}`);
    }
  }
  
  // Creating an instance of the Employee class
  let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
  
  console.log(`Employee ${employee1.first} created`);
  employee1.displayEmployeeDetails();
  