document.getElementById("button1").addEventListener("click", getData);
document.getElementById("button2").addEventListener("click", getJsonData);
document.getElementById("button3").addEventListener("click", getExternalApi);

function getHeaders() {
  const myHeaders = new Headers();
  const myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default"
  };
  return myInit;
}

function getData(e) {
  fetch("test.txt", getHeaders)
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err) {
      console.error(err);
    });
  e.preventDefault();
}

function getJsonData(e) {
  fetch("posts.json", getHeaders)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.table(data);
      let output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.error(err);
    });
  e.preventDefault();
}

function getExternalApi(e) {
  fetch("https://api.github.com/users", getHeaders)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.table(data);
      let output = "";
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.error(err);
    });
  e.preventDefault();
}

function errorHandling(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}
