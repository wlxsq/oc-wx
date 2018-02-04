import { Base } from '../../utils/base.js';

class Single extends Base {
  constructor() {
    super();
  }
  getAllProblems(callback) {
    var params = {
      url: '/exam/v1/problem/all',
      sCallback: function (res) {
        callback && callback(res);
      }
    }
    this.request(params);
  }
  checkAnswer(id, callback) {
    var params = {
      url: '/exam/v1/problem/check',
      type: 'POST',
      data: {
        id: id,
      },
      sCallback: function (res) {
        callback && callback(res);
      }
    }
    this.request(params);
  }
}
export { Single };