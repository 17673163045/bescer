let UserData = [{utel:16680449520,upwd:123456}];

function randomTel() {
  let telphone = "";
  let baseNum = "1";
  let baseNumarr = ["3", "5", "6", "7", "8"];

  telphone += baseNum + baseNumarr[Math.floor(Math.random() * 5)];
  for (var i = 0; i < 9; i++) {
    let randomNum = String(Math.floor(Math.random() * 10));
    telphone += randomNum
  }
  return telphone
}

function randomPwd() {
  let baseNumarr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let pwd = "";
  let minLength = Math.floor(Math.random() * 15) + 6; //6-20
  for (var i = 0; i < minLength; i++) {
    pwd += baseNumarr[Math.floor(Math.random() * 10)]
  }
  return pwd
}
// for (var i = 0; i < 10; i++) {
//   let template = {
//     utel: randomTel(),
//     upwd: randomPwd()
//   }
//   UserData.push(template);
// }
export default UserData
