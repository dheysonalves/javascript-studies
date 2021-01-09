function obj(name) {
  this.name = name
};
let ob = new obj('Mary')
let obj2 = new obj.constructor('Jack');

function objX(name) {
  this.name = name;
}

objX.prototype = {}

let object = new objX('Jonny')
let object2 = new objX.constructor('Joana')

console.log(object2.name); // anonymous
