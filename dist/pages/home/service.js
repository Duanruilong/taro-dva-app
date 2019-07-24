'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo = exports.product = exports.homepage = undefined;

var _request = require('../../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homepage = exports.homepage = function homepage(data) {
  return (0, _request2.default)({
    url: '/homepage-v3',
    method: 'GET',
    data: data
  });
};

var product = exports.product = function product(data) {
  return (0, _request2.default)({
    url: '/product/filter',
    method: 'GET',
    data: data
  });
};

var demo = exports.demo = function demo(data) {
  return (0, _request2.default)({
    url: '/homepage-v3',
    method: 'GET',
    data: data
  });
};