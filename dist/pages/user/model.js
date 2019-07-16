'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _service = require('./service.js');

var userApi = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  namespace: 'user',
  state: {},

  effects: {
    effectsDemo: /*#__PURE__*/regeneratorRuntime.mark(function effectsDemo(_, _ref) {
      var call = _ref.call,
          put = _ref.put;

      var _ref2, status, data;

      return regeneratorRuntime.wrap(function effectsDemo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return call(userApi.demo, {});

            case 2:
              _ref2 = _context.sent;
              status = _ref2.status;
              data = _ref2.data;

              if (!(status === 'ok')) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return put({ type: 'save',
                payload: {
                  topData: data
                } });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, effectsDemo, this);
    })
  },

  reducers: {
    save: function save(state, _ref3) {
      var payload = _ref3.payload;

      return _extends({}, state, payload);
    }
  }

};