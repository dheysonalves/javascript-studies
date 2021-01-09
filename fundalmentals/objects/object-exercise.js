// ATIVIDADE 1
// 1
let user = {};

// 2 e 3

user.name = "John";
user.surname = "Smith";

// 4

user.name = "Pete";

// 5

delete user.name;

// ATIVIDADE 2

function isEmpty(object) 
{
    for (const key in object) {
        if (object.hasOwnProperty(key)) 
            return false;
    }
    return true;
}

let horario = {};

console.log(isEmpty(horario));

// ATIVIDADE 3 