import request from "./https"
class Apis {
  //cnode的接口
  getTopics() {
    return request({
      method: 'get',
      url: '/api/v1/topics',
    });
  }
  //cnode的接口
  getThem() {
    return request.get("https://cnodejs.org/apis/api/v1/topic_collect/alsotang")
  }
  //本地服务器的接口
  getPhp() {
    return request({
      method:"post",
      url: "/dist/php/json.php",
      data:{
        uname:"sasige",
        upwd:"123456"
      }
    })
  }
  //本地服务器的接口
  //请求商品列表
  goodsList(){
    return request({
      method:"get",
      url: "/testjson/list.json"
    })
  }
   //请求商品详情
  goodsDetail() {
    return request({
      method: "get",
      url: "/testjson/detail.json"
    })
  }
}
export default new Apis()
