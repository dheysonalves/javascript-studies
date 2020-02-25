document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  let xhr = new XMLHttpRequest();
  let number = document.querySelector('input[type="number"]').value;
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, open);

  xhr.onload = function() {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText);
      let output = "";
      if (response.type === "success") {
        response.value.forEach(function(arr) {
          output += `<li>${arr.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong!</li>`;
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
