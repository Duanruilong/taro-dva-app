"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = (_dec = (0, _index3.connect)(function (_ref) {
  var home = _ref.home,
      list = _ref.list,
      loading = _ref.loading;
  return _extends({}, home, list, loading);
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(List, _BaseComponent);

  function List() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["$compid__3", "dispatch", "page", "banneret", "banner", "brands", "productsList", "effects"], _this.config = {
      navigationBarTitleText: '列表'
    }, _this.componentDidMount = function () {
      _this.props.dispatch({
        type: 'home/product',
        payload: {
          page: _this.props.page + 1,
          mode: 1,
          type: 0,
          filter: 'sort:recomm|c:330602'
        }
      });
    }, _this.customComponents = ["GoodList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "onReachBottom",


    // 小程序上拉加载
    value: function onReachBottom() {
      this.props.dispatch({
        type: 'home/save',
        payload: {
          page: this.props.page + 1
        }
      });
      this.props.dispatch({
        type: 'home/product',
        payload: {
          page: this.props.page + 1,
          mode: 1,
          type: 0,
          filter: 'sort:recomm|c:330602'
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__3"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__3 = _genCompid2[0],
          $compid__3 = _genCompid2[1];

      var _props = this.__props,
          banneret = _props.banneret,
          banner = _props.banner,
          brands = _props.brands,
          productsList = _props.productsList,
          effects = _props.effects;

      console.log('this.props==list-----==>>>', this.__props);

      _index.propsManager.set({
        "list": productsList,
        "loading": effects && effects['home/product']
      }, $compid__3, $prevCompid__3);
      Object.assign(this.__state, {
        $compid__3: $compid__3
      });
      return this.__state;
    }
  }]);

  return List;
}(_index.Component), _class2.$$events = [], _class2.$$componentPath = "pages/list/index", _temp2)) || _class);
exports.default = List;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(List, true));