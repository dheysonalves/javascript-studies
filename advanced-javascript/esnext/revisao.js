const [index, indexTwo, ...wholeThing] = "The great word";

console.log(wholeThing);

{
  const { nome, idade } = { nome: "Pedro", idade: 9 };
}

const expression = (...numbers) => {
  let total = 0;
  numbers.forEach(n => (total += n));
  return total;
};

console.log(expression(2, 3, 4, 5));

// ESNEXT OBJECT VALUES/ENTRIES

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.keys(obj));

const name = "Carla";

const objeto = {
  name,
  something() {
    return "AHA!";
  }
};

console.log(objeto.something());

class Animal {
  _value = "";

  _eat() {
    return "eating something...";
  }
  
  get _speak() {
    return `speaking ...`;
  }

  set _walk(direction) {
    this._value = direction;
    return `walking through ${this._value}`;
  }
}

var ok = new Animal();
console.log(ok._walk("north"));

var meuCarro = new Object();

meuCarro["fabricacao"] = "Ford";
meuCarro["modelo"] = "Mustang";

function objetoProps(obj, objName) {
  var result = "";
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += objName + "." + key + "=" + obj[key] + "\n";
    }
  }
  return result;
}

console.log(objetoProps(meuCarro, "meuCarro"));

const objectStructure = {
  0: [
    {
      nome: "oi",
      value: 2
    }
  ],
  1: [
    {
      nome: "aha",
      value: 3
    }
  ]
};

console.log(Object.entries(objectStructure));
