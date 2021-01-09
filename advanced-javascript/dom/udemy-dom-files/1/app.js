let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
console.log(document.getElementById('task-title'));

// BEST PRACTICE
const titleChange = document.getElementById('task-title');
titleChange.textContent = 'this is how we do';
titleChange.innerHTML = '<span style="color:red">this is how we do</span>';
// document.getElementById('task-title').style.background = '#333';
// document.getElementwById('task-title').style.color = '#333';

// QUERY SELECTOR

console.log(document.querySelector('#task-title'));
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
// GLOBAL SCOPE
const items = document.getElementsByClassName('collection-item');
console.log(items);
// LOCAL SCOPE
const testItem = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(testItem);

// TAS STYLE'

var testTag = document.getElementsByTagName('li');
console.log(testTag);
testTag[2].style.background = 'red';
testTag[1].style.background = 'blue';

testTag = Array.from(testTag);
testTag.reverse();

testTag.forEach(function (lis, index) {
  console.log(lis.className);
});

// QUERY SELECTORS ON MULTIPLE LINES

const itemsQuery = document.querySelectorAll('ul.collection li.collection-item');
console.log('QUERY SELECTOR' + itemsQuery);

let variable;

const listChild = document.querySelector('li.collection-item:first-child');

variable = listChild;
variable = listChild.childNodes;
console.log(variable);

// CREATING-ELEMENTS

const elem = document.createElement('li');

elem.className = 'collection-item';
elem.id = 'new-item';
elem.setAttribute('title', 'New Item');
elem.appendChild(document.createTextNode('we should work on this!'));
document.querySelector('ul.collection').appendChild(elem);
console.log(elem);

const link = document.createElement('a');

link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
elem.appendChild(link);

// DELETING AND REPLACING

const newHeading = document.createElement('h2');

newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.getElementById('task-title');

const change = document.querySelector('.card-action');

change.replaceChild(newHeading, oldHeading);
