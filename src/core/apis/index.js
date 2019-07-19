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
      method: "post",
      url: "/dist/php/json.php",
      data: {
        uname: "sasige",
        upwd: "123456"
      }
    })
  }
  //本地服务器的接口
  //请求商品列表
  goodsList() {
    return request({
      method: "get",
      url: "/testjson/list.json"
    })
  }

  //本地接口请求商品详情
  goodsDetail() {
    return request({
      method: "get",
      url: "/testjson/detail.json"
    })
  }

  //贝思客接口,首页数据
  bescerIndex() {
    return request({
      method: "get",
      url: "/json1811.ashx",
      params: {
        v: 1563176603032,
        c: "NewIndexController",
        m: "index"
      }
    })
  }

  //贝思客分类页面的数据
  getClassify() {
    return request({
      method: 'get',
      url: '/json1811.ashx',
      params: {
        "v": "1563249470561",
        "c": "NsCakeCenter",
        "m": "GetJdListNew"
      }
    });
  }

  //贝思客接口,详情页根据路由query来获取不同的接口
  getApiByQuery(params) {
    return request({
      method: "get",
      url: "/json1811.ashx",
      params
    })
  }
}
export default new Apis()
