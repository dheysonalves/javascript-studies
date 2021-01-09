var color = 'red';

switch('red') {
  case 'red':
  console.log('COlOR IS RED');
  break;
  case 'blue':
  console.log('COLOR IS BLUE');
  break;
}


// FUNCTIONS TIME

(function(name) {
  console.log("testing " + name);
})('Brad');

var lOP = {
  user : "Dark",
  age: 25,
  work: "looser"
}

for(x in lOP) {
  console.log(`${x} : ${lOP[x]}`);
}
