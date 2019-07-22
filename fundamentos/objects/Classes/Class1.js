class Kid {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    get info() {
        return `${this.name}: ${this.age}`
    }
}

let object = new Kid('James', 78);

console.log(object.info);

 console.log(typeof Kid);

 function makeClass(phrase) {
     return class {
         sayHi() {
             console.log(phrase);
         };
     };
 }

 let user = makeClass('Hey there!')

 new user().sayHi()