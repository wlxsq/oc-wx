import { Base } from '../../../utils/base.js';

class NewsDetail extends Base {
  constructor() {
    super();
  }

  getNewsDataByID(id, callback) {
    var params = {
      url: '/api/v1/news/detail/' + id,
      sCallback: function (res) {
        callback && callback(res);
      }
    }
    this.request(params);
  }
}
export { NewsDetail };