var Buffer = require("buffer").Buffer;

export default {
  get: (url, callback, params = []) => {
    url = BASE + url;
    params.forEach(param => {
      url = url.replace(/{\w+}/, param);
    });
    fetch(url, {
      headers: {
        Authorization:
          "Basic " + new Buffer(username + ":" + password).toString("base64")
      }
    })
      .then(response => response.json())
      .then(json => {
        callback(json);
      });
  },

  login: (url, params) => {
    url = BASE + url;
    username = params.username;
    password = params.password;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(function(res) {
      console.log(res.ok);
    });
  }
};
var username = "nanguangtailang";
var password = "123";
const BASE = "http://115.29.184.56:8090/api";
