/*

EASYHTTP Library
Library for making HTTP Requests

*
*  @version 3.0.0
*  @author Dheyson ALves
*  @licence MIT
*/
const myHeaders = new Headers();

class EasyHttp {
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  async post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  async put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  async delete(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        },
        mode: "cors",
        cache: "default"
      })
        .then(response => response.json())
        .then(() => resolve("Resource deleted! "))
        .catch(err => reject(err));
    });
  }
}
