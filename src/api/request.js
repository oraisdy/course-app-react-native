var Buffer = require("buffer").Buffer;

const BASE = "http://115.29.184.56:8090/api";

export default {
  get: (url, callback, params = []) => {
    url = BASE + url;
    params.forEach(param => {
      url = url.replace(/{\w+}/, param);
    });

    return fetch(url, {
      headers: {
        Authorization:
          "Basic " +
            new Buffer(
              (username || "liuqin") + ":" + (password || "123")
            ).toString("base64")
      }
    })
      .then(response => response.json())
      .then(json => {
        callback(json);
      });
  },

  login: (url, params) => {
    url = BASE + url;
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => {
      if (res.ok) {
        var json = res.json();
        username = params.username;
        password = params.password;
        return json;
      }
    });
  }
};

var username;
var password;
