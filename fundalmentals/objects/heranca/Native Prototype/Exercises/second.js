Function.prototype.defer = function(ms) {
    let l = this
    return function (...args) {
        setTimeout( () => f.apply(this, args), ms) 
    }
};

function f(a, b) {
    console.log(`${a} + ${b}`)
}
  
f.defer(1000)(1, 2); // shows 3 after 1 second

console.log(typeof f.defer())