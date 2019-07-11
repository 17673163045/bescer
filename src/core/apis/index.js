import request from "./https"
class Apis {
  getTopics() {
    return request({
      method: 'get',
      url: '/api/v1/topics',
    });
  }
  getThem() {
    return request.get("/api/v1/topic_collect/alsotang")
  }
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
}
export default new Apis()
