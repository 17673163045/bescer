import userdata from "./userinfo"
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
let mock = new MockAdapter(axios);


mock.onPost("/login").reply(config => {
  let data = JSON.parse(config.data).data
  var flag = true;
  for (var i = 0; i < userdata.length; i++) {
    if (userdata[i].utel == data.utel && userdata[i].upwd == data.upwd) {
      flag = false;
      return [200, {
        status: 1,
        msg: "登录成功",
        code: 1000,
        data: userdata[i]
      }]
    }
  }
  if (flag) {
    return [200, {
      status: -1,
      msg: "登录失败",
      code: -1000
    }]
  }
})
export default axios;
