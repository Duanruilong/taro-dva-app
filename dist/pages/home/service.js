'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo = undefined;

var _request = require('../../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = exports.demo = function demo(data) {
  return (0, _request2.default)({
    url: '/homepage-v3',
    method: 'GET',
    data: data
  });
};