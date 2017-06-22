global.fetch = require("isomorphic-fetch");

import request from "../src/api/request";
import api from "../src/api/api";

it("renders correctly", () => {
  request.login(
    api.auth,
    {
      username: "liuqin",
      password: "123"
    }
  ).then((json)=>console.log(json));

  request.get(api.groups, function(data) {
    console.log(data);
  });

  // request.get(
  //   api.homeworks,
  //   function(data) {
  //     console.log(data);
  //   },
  //   [2]
  // );
  // request.get(
  //   api.students,
  //   function(data) {
  //     console.log(data);
  //   },
  //   [8]
  // );

  // request.get(api.groups);

  // request.get(api.analysis, [1, 1]);
});
