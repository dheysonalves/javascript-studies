class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get whoAmI() {
        return `${this.name}: ${this.age}`;
    }
}

class Student extends Person {
    constructor(...args) {
        super(...args);
    }
}

class ClassMateKid extends Person {
    constructor(name, age, course) {
        super(name);
        this.age = age;
        this.course = course;
    }
}

let functionObject = new Student('name', 29)
console.log(functionObject.whoAmI)

let newObject = new ClassMateKid('Jenn', 20, 'Computer Science');