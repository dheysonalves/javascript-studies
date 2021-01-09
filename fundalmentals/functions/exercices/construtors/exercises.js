// TASK 1 - TWO FUNCTIONS - ONE OBJECT

// function A() {  }
// function B() {  }

// let a = new A;
// let b = new B;

// console.log(a == b); // true

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert(new A() == new B()); // true


// TASK 2 -- NEW CALCULATOR

function Calculator (a = 5, b = 7) {

    this.sum = function () {
        return a + b
    }

    this.mul = function () {
        return a * b
    }

}

let calculator = new Calculator(8, 7)
calculator.sum()

console.log(calculator.mul())