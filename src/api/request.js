export default {
  get: (url, params = []) => {

    url = BASE + url;
    params.forEach((param) => {
      url.replace(/{\w+}/, param);
    });
    // console.log(url);
    fetch(url, {
        headers: {
          "Authorization": "Basic " + new Buffer(username + ":" + password).toString('base64')
        }
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(JSON.stringify(json));
      });
  },

  login: (url, params) => {
    url = BASE + url;
    username = params.username;
    password = params.password;
    fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      .then(function (res) {
        console.log(res.ok);
      });
  }
}
var username;
var password;
const BASE = "http://115.29.184.56:8090/api";