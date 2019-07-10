import request from "./https"
class Apis{
    getTopics() {
      return request({
        method: 'get',
        url: '/api/v1/topics',
      });
    }
}
export default new Apis()