class Person {
    _code = 0
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set yourCode(value) {
        if (value < 0) throw new Error('There is a error arround');
        this._code = value;
    }

    get yourCode() {
        return `${this._code}: ${this.name}, ${this.age}`;
    }
}

const object = new Person('Kid', 29);
object.yourCode = 9
object.yourCode = -1
console.log(object.yourCode)