let selectorQuery = document.querySelectorAll('ul > li:last-child');
//
// for (let elem of selectorQuery) {
//   alert(elem.innerHTML);
// }

for (let elem of document.body.children) {
  if (elem.matches('a[href^="https"]')) {
    console.log("this is the reference" +elem.href);
  } else {
    console.log("there is no such thing");
  }
}

let closestQuery = document.querySelector('.caption');

console.log(closestQuery.closest('.ok'));

let elem = document.body;

console.log(elem.nodeType);
console.log(elem.firstChild.nodeType);
console.log(document.nodeType);

let name = prompt("What's your name?", "<b>Winnie-the-pooh!</b>");

console.log(elem1.innerHTML = name);
console.log(elem2.textContent = name);
