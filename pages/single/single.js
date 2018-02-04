// pages/single/single.js

import { Single } from "./single-model.js";
var single = new Single();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    problemArr: [],
    problem: [],
    array: [],
    bc: [],
    index: 0,
    count: 0,
    bc_default: '#FBFBFB',
    bc_right: '#98FB98',
    bc_wrong: '#FF99B4',
    state: '',
    answer: '',
    score: '',
  },

  setQuestion: function () {
    var i = this.data.index;
    this.setData({
      problem: this.data.problemArr[i],
      bc: {
        1: this.data.bc_default,
        2: this.data.bc_default,
        3: this.data.bc_default,
        4: this.data.bc_default,
      },
      state: '',
      answer: '',
      score: '',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },

  _loadData: function () {

    single.getAllProblems((res) => {
      var arr = new Array(res.cnt);
      for (var i = 0; i < res.cnt; i++) {
        arr[i] = i + 1;
      }
      this.setData({
        problemArr: res,
        count: res.cnt,
        array: arr,
      });
      this.setQuestion();
    })
  },
  /**
   * 上一题
   */
  lastProblem: function () {
    if (this.data.index > 0) {
      this.setData({ index: this.data.index - 1 });
      this.setQuestion();
    }
  },
  /**
   * 下一题
   */
  nextProblem: function () {
    if (this.data.index < this.data.count - 1) {
      this.setData({ index: this.data.index + 1 });
      this.setQuestion();
    }
  },
  /**
   * 跳题
   */
  bindPickerChange: function (e) {
    this.setData({ index: this.data.index = e.detail.value });
    this.setQuestion();
  },
  /**
   * 判断选择是否错误
   */
  btnOpClick: function (event) {
    var id = event.currentTarget.id;
    single.checkAnswer(id, (res) => {
      this.setQuestion();
      var up = 'bc[' + id + ']';
      console.log(up);
      if (res.state == true) {
        this.setData({
          answer: res.resolution,
          score: res.score,
          state: '恭喜你，回答正确！',
          [up]: this.data.bc_right,
        });
      } else {
        this.setData({
          answer: res.resolution,
          score: res.score,
          state: '很遗憾，回答错误！',
          [up]: this.data.bc_wrong,
        });
      }
    });
  }
})