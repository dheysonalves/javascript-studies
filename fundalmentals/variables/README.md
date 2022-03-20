# VARIABLES, TYPES AND OPERATIONS

## Questions

- What is the difference between a store based on memory reference and value reference ?

- Which types does work as a memory reference based ? How does it work ?

## VALUES

A primitive type gather a amount of bits, which resolves in a value. When you do not need anymore, it dissipates, ands its bits space is recycled for the next value to come through.

### Numbers

14

That is the fourteen representative number format. When using in a program, it may causes some operations inside a computer.

In Javascript, we use fixed 64 bits for represent a store number. Which in decimal number, it can contains a 10eN+-, which means has a limit. In a binary point of view, it might contains 2e64 different numbers.

Even so, we got some limitations related, follow the author of Elouquent Javascript 3th Edition, Written by Marijn Haverbeke, he said:

"_Calculations with whole numbers (also called integers) smaller than the aforementioned 9 quadrillion are guaranteed to always be precise. Unfortunately, calculations with fractional numbers are generally not. Just as π (pi) cannot be precisely expressed by a finite number of decimal digits, many numbers lose some precision when only 64 bits are available to store them. This is a shame, but it causes practical problems only in specific situations. The important thing is to be aware of it and treat fractional digital numbers as approximations, not as precise values._"

#### Numbers: Decimals, Floating Points Problems

#### Problem

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
