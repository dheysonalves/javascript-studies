// var car = {
// cars:[{make:"Lamborghini",model:"Huracán"},
// { make: "Mclaren", model: "720s"},
// {make: "Ferrari",model: "Italia"}],
// fullName:function(){this.cars.forEach(()=>{console.log (this.make + " " + this.model);
// })}}
// car.fullName();
// var time = 'ok';
// var car = {
//   name: 'stomb',
//   model: 'lanborg',
//   timSamp: function() {
//     console.log("Ok, lets see " + this.model +' '+ this.name);
//   }
// }
// car.timSamp();

let description = {
  work:"time to work",
  number:2
};
// only delete the value
delete description.work;
console.log(description.work);
//see if there is some value on it
console.log("work" in description);


var ok = "testando";
var twoOk = "testando2"

function trying() {
  console.log("essa e a primeira " + this.ok + " essa e a segunda " +this.twoOk);
}

window.trying();

let value = {
  name:'Silvanete',
  age: 44,
  show: function() {
    console.log("Meu nome e " + this.name + ", e minha idade e " + this.age);
  }
};

value.show();
