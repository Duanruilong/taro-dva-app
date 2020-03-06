"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/dva-core/index.js");

var _reduxLogger = require("../npm/redux-logger/dist/redux-logger.js");

var _index4 = require("../npm/dva-loading/dist/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = void 0;
var store = void 0;
var dispatch = void 0;

/**
 *配置dva
 *
 * @author Drlong
 * @date 2019-07-16
 * @param {*} opt
 * @returns 
 */

function createApp(opt) {
  // redux日志
  opt.onAction = [(0, _reduxLogger.createLogger)()];
  app = (0, _index3.create)(opt);
  app.use((0, _index5.default)({}));

  // 适配支付宝小程序
  if (_index2.default.getEnv() === _index2.default.ENV_TYPE.ALIPAY) {
    global = {};
  }

  if (!global.registered) opt.models.forEach(function (model) {
    return app.model(model);
  });
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = function () {
    return store;
  };

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

exports.default = {
  createApp: createApp,
  getDispatch: function getDispatch() {
    return app.dispatch;
  }
};