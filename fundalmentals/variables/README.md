# VARIABLES, TYPES AND OPERATIONS

## Questions

- What is the difference between a store based on memory reference and value reference ?

- Which types does work as a memory reference based ? How does it work ?

## Introduction

There are multiple ways that .js files might work together. There are standalone files that works by it self, modules bases which works as mini-files that work with other mini-files. There are javascript files that are mixup with build time in a single file.

In any case, javascript files does have many ways to manage workflow, but we follow that each file works as a mini-file between a another group of mini-files which results in an application.

---

## VAR, [LET](./escopo-let.js) AND [CONST](./variaveis_constantes.js)

---

## [CONSTANT VARIABLES](./variaveis_constantes.js)

---

Following the use-case for const, we should avoid using const for non-primitive times, which might lead to confusion, based on YOU DONT KNOW JS YET:

_const declared variables are not "unchangeable", they just cannot be re-assigned. It's ill-advised to use const with object values, because those values can still be changed even though the variable can't be re-assigned. This leads to potential confusion down the line, so I think it's wise to avoid situations like:_

```javascript
const actors = [
    "Morgan Freeman", "Jennifer Aniston"
];

actors[2] = "Tom Cruise";   // OK :(
actors = [];                // Error!
```

## [VALUES TYPES](./tipagem.js)

A primitive type gather a amount of bits, which resolves in a value. When you do not need anymore, it dissipates, ands its bits space is recycled for the next value to come through.

---

## [Numbers](./numbers.js)

---

14

That is the fourteen representative number format. When using in a program, it may causes some operations inside a computer.

In Javascript, we use fixed 64 bits for represent a store number. Which in decimal number, it can contains a 10eN+-, which means has a limit. In a binary point of view, it might contains 2e64 different numbers.

Even so, we got some limitations related, follow the author of Elouquent Javascript 3th Edition, Written by Marijn Haverbeke, he said:

"_Calculations with whole numbers (also called integers) smaller than the aforementioned 9 quadrillion are guaranteed to always be precise. Unfortunately, calculations with fractional numbers are generally not. Just as π (pi) cannot be precisely expressed by a finite number of decimal digits, many numbers lose some precision when only 64 bits are available to store them. This is a shame, but it causes practical problems only in specific situations. The important thing is to be aware of it and treat fractional digital numbers as approximations, not as precise values._"

## Numbers: Decimals, Floating Points Problems

---

### Problem

1. Mixing numbers with floating numbers might get innacurate results

eg.:

```javascript
1 + 0.1 + 2 + 0.2; // input
3.3000000000000003; // output
```

#### Native Solution

Convert everything to decimal number, then get back to floating point number

```javascript
(1 + (0.1 * 10) + 2 + (0.2 * 10)) / 10 // input
0.6 // output
```

To read more about it:

- <https://fabiensanglard.net/floating_point_visually_explained>
- <https://github.com/alexreardon/big-number-demos>
- <https://github.com/MikeMcl/bignumber.js/>
- [Alexander Reardon: Let's go big (Big numbers in JavaScript) | JSConf EU 2017](https://www.youtube.com/watch?v=9SHOfZI_SsM&t=26s)

---

## Boolean States

A boolean state it relates to a ON and OFF behavior. TRUE or FALSE.

In javascript, when we are comparing strings:

"_it goes from left to right, comparing the Unicode codes one by one_"

```javascript
console.log("Aard" < "Zoroas") // true
```

The only value in javascript hat is not equal to itself is "not a number".

```javascript
console.log(NaN == NaN)
```

---

## Coersion

In javascript, it automatically type cast a variable when comparing. It is called _type coersion_

```javascript
"5" + 1 // "51"
"5" - 1 // 4
8 * null // 0
false == 0 // true
```

But when considering verify its value and type, it should consider using the _three-character operator verification_.

```javascript
false === 0 // false
"1" === 1 // false
```

There are some types of coersion, explicit and implicit. Explicit works when you are using with itention the javascript API to cast some value. Implicit works automatically without this API.

Depending on types, the implicit coersion works diferentlly.

## References

---

[Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

[Coercion Type Explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)

### **STRING**

In strings, the implicit coersion is triggered by the + operator.

```javascript
3 + '' // "3" implicit
String(3) // explicit
```

### **BOOLEAN**

Boolean coersion works in a different way. It does a coersion on the left value, depending on the type. Following the author of Eloquent Javascript 3th edition, he says:

"_The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value._"

which means, they might return their original value:

```javascript
// returns number 123, instead of returning true
// 'hello' and 123 are still coerced to boolean internally to calculate the expression
let x = 'hello' && 123;   // x === 123
```
