function easyHttp() {
  this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function(url) {
  this.http.open("GET", url, true);

  // The function expression below it has contained his object container
  // So the `this` before the dot inside the function actually references (this.http) in the global function scope
  this.http.onload = function() {
    if (this.status === 200) {
      try {
        console.log(this.responseText);
      } catch (error) {
        console.error("Something error", error);
      }
    }
  };
  this.http.send();
};

easyHttp.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  this.http.onload = function() {
    callback(null, this.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHttp.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  this.http.onload = function() {
    callback(null, this.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHttp.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  this.http.onload = function() {
    if (this.status === 200) {
      callback(null, "Post deleted!");
    } else {
      callback("Error", this.status);
    }
  };
  this.http.send();
};
