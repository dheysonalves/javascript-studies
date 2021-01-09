let user = {
    name: "John",
    age: 30,
    "little finger" : true,
}

console.log(user.name);
// propriedades multiwords 
user["that works"] = false;
console.log(user["that works"]);

let key = "likes birds";

// mesmo que user["that works"] = true;
user[key] = true;
// chave é calculada em tempo de execução

/* let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log( bag.apple ); // 5 if fruit="apple" */

delete user.age
console.log(user)