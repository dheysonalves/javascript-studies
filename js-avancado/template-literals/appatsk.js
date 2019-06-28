let html;
const name = 'Octavius';
const age = 39;
const gender = 'male';

function  hiMark() {
  return 'hey,hi!'
}

html = `
       <ul>
       <li>Name: ${name} </li>
       <li>Age: ${age} </li>
       <li>Gender: ${gender} </li>
       <li>${age > 38 ? 'over 38' : 'under 38'} </li>
       <li>function: ${hiMark()} </li>
       </ul>
       `;

document.body.innerHTML = html;
