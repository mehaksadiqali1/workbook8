
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hi, my name is ${this.name}`);
    }
}


const steve = new Person("Steve", 30); 
const cris = new Person("Cris", 25); 

steve.sayHello(); 
cris.sayHello();  

