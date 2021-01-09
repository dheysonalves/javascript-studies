let user =
{}

console.log(user.noSuchProperty === undefined)

let test = 
{
    name: "Jose",
    age: 20
};

for (let key in test)
{
    console.log(test[key])
}

let integerLoop =
{
    "89":"germany",
    "21":"A good",
    "34":"place to",
    "55":"go is"
};

for (const key in integerLoop) {
    console.log(integerLoop[key])
}