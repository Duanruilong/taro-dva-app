'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _service = require('./service.js');

var homeApi = _interopRequireWildcard(_service);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  namespace: 'home',
  state: {
    banner: [],
    brands: [],
    banneret: '',
    productsList: [],
    page: 1
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
                  brands: data.brands,
                  banneret: data
                }
              });

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, load, this);
    }),
    product: /*#__PURE__*/regeneratorRuntime.mark(function product(_ref3, _ref4) {
      var payload = _ref3.payload;
      var call = _ref4.call,
          put = _ref4.put,
          select = _ref4.select;

      var _ref5, page, productsList, _ref6, status, data;

      return regeneratorRuntime.wrap(function product$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return select(function (state) {
                return state.home;
              });

            case 2:
              _ref5 = _context2.sent;
              page = _ref5.page;
              productsList = _ref5.productsList;
              _context2.next = 7;
              return call(homeApi.product, _extends({}, payload));

            case 7:
              _ref6 = _context2.sent;
              status = _ref6.status;
              data = _ref6.data;

              console.log(page, '-===--获取product数据==》', data);

              if (!(status === 'ok')) {
                _context2.next = 14;
                break;
              }

              _context2.next = 14;
              return put({
                type: 'save',
                payload: {
                  productsList: page > 1 ? [].concat(_toConsumableArray(productsList), _toConsumableArray(data.rows)) : data.rows
                }
              });

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, product, this);
    })
  },

  reducers: {
    save: function save(state, _ref7) {
      var payload = _ref7.payload;

      return _extends({}, state, payload);
    }
  }

};