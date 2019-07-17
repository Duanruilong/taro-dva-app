'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _service = require('./service.js');

var homeApi = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  namespace: 'home',
  state: {
    banner: []

  },

  effects: {
    load: /*#__PURE__*/regeneratorRuntime.mark(function load(_, _ref) {
      var call = _ref.call,
          put = _ref.put;

      var _ref2, status, data;

      return regeneratorRuntime.wrap(function load$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(homeApi.homepage, {});

            case 2:
              _ref2 = _context.sent;
              status = _ref2.status;
              data = _ref2.data;

              console.log('获取首页数据==》', data);

              if (!(status === 'ok')) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return put({
                type: 'save',
                payload: {
                  banner: data.banner,
                  brands: data.brands
                }
              });

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, load, this);
    }),
    effectsDemo: /*#__PURE__*/regeneratorRuntime.mark(function effectsDemo(_, _ref3) {
      var call = _ref3.call,
          put = _ref3.put;

      var _ref4, status, data;

      return regeneratorRuntime.wrap(function effectsDemo$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return call(homeApi.demo, {});

            case 2:
              _ref4 = _context2.sent;
              status = _ref4.status;
              data = _ref4.data;

              if (!(status === 'ok')) {
                _context2.next = 8;
                break;
              }

              _context2.next = 8;
              return put({ type: 'save',
                payload: {
                  topData: data
                } });

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, effectsDemo, this);
    })
  },

  reducers: {
    save: function save(state, _ref5) {
      var payload = _ref5.payload;

      return _extends({}, state, payload);
    }
  }

};