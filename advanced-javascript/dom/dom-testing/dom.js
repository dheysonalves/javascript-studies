var doc;

doc = document.all;
console.log(doc);

doc = document.baseURI;
doc = document.childNodes;
console.log(doc);

doc = document.childNodes[0] === document.firstChild;
doc = document.childNodes[document.childNodes.length - 1] === document.lastChild;
doc = document.hasChildNodes();

console.log(doc);

for (let node of document.body.childNodes) {
  // alert(node);
}
// its not an array
// alert(Array.from(document.body.childNodes).filter);

doc = document.lastChild.nextSibling;
console.log(doc);

doc = document.children[0].previousSibling;
console.log(doc);

doc = document.getElementById('cor');
console.log(doc);

doc = document.getElementsByTagName('li')[1].innerHTML = 'The world is over';
console.log(doc);

// console.log(location.href);
// if (confirm('Go to wikipedia')) {
//   location.href = 'https://wikipedia.org';
// }

const elem = document.createElement('li');

elem.className = 'working on';
elem.setAttribute('title', 'that\'s how we do');
elem.appendChild(document.createTextNode('we should work on this!'));
console.log(elem);

let lines = document.getElementsByTagName('li');
for (let oo of lines) {
  console.log(oo);
}

const newT = document.createElement('h3');
newT.id = 'elem';

newT.appendChild(document.createTextNode('REPLACING'));

const old = document.getElementById('elem');

const card = document.querySelector('.ok');

card.replaceChild(newT, old);

console.log(newT);

const firstLi = document.querySelector('li:first-child');

console.log(firstLi);
// document.querySelector('.clear-task').addEventListener('click', function (e) {
//   console.log('hello world');
//    e.preventDefault();
// });
function onCLick (e) {
  let val;

  val = e;
  val = e.target;
  val = e.target.id;
  console.log(val);
}
document.querySelector('.clear-task').addEventListener('click', onClick());
