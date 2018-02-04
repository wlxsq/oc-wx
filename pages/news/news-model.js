import { Base } from "../../utils/base.js";

class News extends Base {

  constructor() {
    super();
  }

  getAllNewsData(callback) {
    var params = {
      url: '/api/v1/news/all',
      sCallback: function (res) {
        callback && callback(res);
      }
    }
    this.request(params);
  }
}
export {News};