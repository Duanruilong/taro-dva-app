"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** 
                                                                                                                                                                                                                                                                   * 封装请求方法
                                                                                                                                                                                                                                                                  */

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request_data = {
  platform: 'wap',
  rent_mode: 2
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { method: 'GET', data: {} };

  if (!_index3.noConsole) {
    console.log(new Date().toLocaleString() + "\u3010 M=" + options.url + " \u3011P=" + JSON.stringify(options.data));
  }
  return _index2.default.request({
    url: _index3.baseUrl + options.url,
    data: _extends({}, request_data, options.data),
    header: {
      'Content-Type': 'application/json'
    },
    method: options.method.toUpperCase()
  }).then(function (res) {
    var statusCode = res.statusCode,
        data = res.data;

    if (statusCode >= 200 && statusCode < 300) {
      if (!_index3.noConsole) {
        console.log(new Date().toLocaleString() + "\u3010 M=" + options.url + " \u3011\u3010\u63A5\u53E3\u54CD\u5E94\uFF1A\u3011", res.data);
      }
      if (data.status !== 'ok') {
        _index2.default.showToast({
          title: res.data.error.message + "~" || res.data.error.code,
          icon: 'none',
          mask: true
        });
      }
      return data;
    } else {
      throw new Error("\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF\uFF0C\u72B6\u6001\u7801" + statusCode);
    }
  });
};