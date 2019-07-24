"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Home = (_dec = (0, _index3.connect)(function (_ref) {
  var home = _ref.home,
      loading = _ref.loading;
  return _extends({}, home, loading);
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Home, _BaseComponent);

  function Home() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["$compid__84", "$compid__85", "$compid__86", "brands", "dispatch", "page", "banneret", "banner", "productsList", "effects"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.componentDidMount = function () {
      // 获取数据
      _this.props.dispatch({
        type: 'home/load'
      });

      _this.props.dispatch({
        type: 'home/product',
        payload: {
          page: 1,
          mode: 1,
          type: 1,
          filter: 'sort:recomm|c:330602'
        }
      });
    }, _this.gotoDetail = function (item) {
      console.log('item', item);

      _index2.default.navigateTo({
        url: "/pages/webview/index?value=" + item.value1.split('?')[0] + "&" + item.value1.split('?')[1]
      });
    }, _this.customComponents = ["BanSwiper", "GoodList"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "onShareAppMessage",

    //分享
    value: function onShareAppMessage() {
      return {
        title: '基于Taro框架开发',
        path: '/pages/home/index'
      };
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
          type: 1,
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
      var $compid__84 = (0, _index.genCompid)(__prefix + "$compid__84");
      var $compid__85 = (0, _index.genCompid)(__prefix + "$compid__85");
      var $compid__86 = (0, _index.genCompid)(__prefix + "$compid__86");

      var _props = this.__props,
          banneret = _props.banneret,
          banner = _props.banner,
          brands = _props.brands,
          productsList = _props.productsList,
          effects = _props.effects;

      console.log('this.props====>>>', this.__props);

      _index.propsManager.set({
        "banneret": banneret.special_topics,
        "banner": banneret.stars,
        "home": true
      }, $compid__84);
      _index.propsManager.set({
        "banneret": banneret.stars,
        "banner": banneret.stars,
        "home": false
      }, $compid__85);
      _index.propsManager.set({
        "list": productsList,
        "loading": effects && effects['home/product']
      }, $compid__86);
      Object.assign(this.__state, {
        $compid__84: $compid__84,
        $compid__85: $compid__85,
        $compid__86: $compid__86,
        brands: brands
      });
      return this.__state;
    }
  }]);

  return Home;
}(_index.Component), _class2.$$events = ["gotoDetail"], _class2.$$componentPath = "pages/home/index", _temp2)) || _class);
exports.default = Home;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Home, true));