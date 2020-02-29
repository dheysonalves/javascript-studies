async function asyncFun() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });

  const error = true;

  if (error) {
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error("Something went wrong!"));
  }
}

asyncFun()
  .then(res => console.log(res))
  .catch(err => console.log(err));

// -----------------------------------------------

async function shorterFun() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();

  return data;
}

shorterFun().then(users => console.log(users));
