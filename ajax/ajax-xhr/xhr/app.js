const btnElement = document.getElementById("button");
btnElement.addEventListener("click", triggerEvent);

function triggerEvent() {
  let xhrRequest;
  if (window.XMLHttpRequest) {
    xhrRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhrRequest = new XMLHttpRequest("Microsoft.XMLHTTP");
  }
  xhrRequest.open("GET", "data.txt", true);

  xhrRequest.onreadystatechange = function() {
    console.log("READYSTATE", xhrRequest.readyState);

    return this.status == 200 && this.readyState == 4
      ? console.log(
          "%c Status: ",
          "color: green; font-weight: bold;",
          this.responseText
        )
      : "";
  };

  xhrRequest.onload = function() {
    if (this.status === 200) {
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhrRequest.onprogress = function() {
    console.log(
      "%c Progres..",
      "color: blue; font-weight: bold;",
      xhrRequest.readyState
    );
  };

  xhrRequest.onerror = function() {
    console.log(
      "%c Something went wrong",
      "color: red; font-weight: bold;",
      xhrRequest.readyState
    );
  };

  xhrRequest.send();
}
