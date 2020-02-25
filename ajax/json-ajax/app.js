document.getElementById("button1").addEventListener("click", triggerEvent);

document.getElementById("button2").addEventListener("click", triggerList);

function triggerEvent() {
  let jsonajax = new XMLHttpRequest();

  jsonajax.open("GET", "data.json", true);

  jsonajax.onload = function() {
    if (this.status === 200) {
      console.log(
        "%c Working",
        "color: green; font-weight: bold;",
        this.responseText
      );
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
        <li>Id: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Profession: ${customer.profession}</li>
        <li>Salary: ${customer.salary}</li>
    </ul>
      `;

      document.getElementById("output").innerHTML = output;
    }
  };
  jsonajax.send();
}

function triggerList() {
  let jsonajax = new XMLHttpRequest();

  jsonajax.open("GET", "listData.json", true);

  jsonajax.onload = function() {
    if (this.status === 200) {
      console.log(
        "%c Working",
        "color: green; font-weight: bold;",
        this.responseText
      );
      const customers = JSON.parse(this.responseText);
      let output = "";

      customers.forEach(function(obj) {
        output += `
            <ul>
                <li>Id: ${obj.id}</li>
                 <li>Name: ${obj.name}</li>
                <li>Profession: ${obj.profession}</li>
                <li>Salary: ${obj.salary}</li>
            </ul>   
        `;
      });

      document.getElementById("output2").innerHTML = output;
    }
  };
  jsonajax.send();
}
