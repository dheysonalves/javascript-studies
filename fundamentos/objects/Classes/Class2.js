function test(phrase) {
    return class {
        sayHi() { console.log(phrase)}
    }
}

class User extends test('HEy there!') {}