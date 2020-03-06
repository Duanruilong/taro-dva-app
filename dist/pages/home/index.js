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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__0", "$compid__1", "$compid__2", "scrollY", "Threshold", "productsList", "dragStyle", "creState", "downPullText", "status", "isLoading", "dispatch", "page", "banneret", "banner", "brands", "effects"], _this.config = {
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
    }, _this.getProduct = function () {

      console.log('getProduct----->>>>>>>>>>>');

      _this.setState({
        status: 'loading'
        // isLoading:true
      });
      _this.props.dispatch({
        type: 'home/product',
        payload: {
          page: 1,
          mode: 1,
          type: 1,
          filter: 'sort:recomm|c:330602'
        }
      }).then(function (res) {
        _this.setState({
          status: 'more',
          isLoading: false
        });
      });
    }, _this.gotoDetail = function (item) {
      console.log('item', item);

      // Taro.navigateTo({
      //   url: `/pages/webview/index?value=${item.value1.split('?')[0]}&${item.value1.split('?')[1]}`,
      // });
    }, _this.touchStart = function (e) {
      var that = _this;
      that.setState({
        creState: e.touches[0]
      });
    }, _this.touchRecMove = function (e) {
      e.stopPropagation();
      var that = _this;
      var move = e.touches[0]; //移动时的位置
      var deviationX = 0.3; //左右偏移量(超过这个偏移量不执行下拉操作)
      var deviationY = 70; //拉动长度（低于这个值的时候不执行）
      var maxY = 100; //拉动的最大高度

      var start_x = that.state.creState.clientX;
      var start_y = that.state.creState.clientY;
      var move_x = move.clientX;
      var move_y = move.clientY;

      //得到偏移数值
      var dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);
      //当偏移数值大于设置的偏移数值时则不执行操作
      if (dev < deviationX) {
        // 超过deviationX这个偏移量不执行下拉操作
        //拖动倍率
        var dragY = Math.abs(move_y - start_y) / 3.5;
        //下拉操作
        if (move_y - start_y > 0) {
          if (dragY >= deviationY) {
            //    console.log('dragY >= deviationY===>>>>>',dragY ,'>=', deviationY);

            that.setState({
              downPullText: '释放刷新',
              downPullTYpe: 'get'
              // isLoading:true
            });
          } else {
            that.setState({
              downPullText: '下拉刷新',
              downPullTYpe: 'no'
            });
          }
          if (dragY >= maxY) {
            dragY = maxY;
          }
          that.setState({
            dragStyle: {
              top: dragY + 'px'
            },
            downPullStyle: {
              height: dragY + 'px'
            },
            scrollY: false
          });
        }
      }
    }, _this.reduction = function () {
      var time = 0.5;
      var that = _this;
      that.setState({
        dragStyle: {
          top: "0px",
          transition: "all " + time + "s"
        },
        downPullStyle: {
          height: "0px",
          transition: "all " + time + "s"
        },
        scrollY: true
      });

      setTimeout(function () {
        console.log('`````````````````````~~~~~~~~~~~~~`setTimeout---');

        that.setState({
          dragStyle: {
            top: "0px"
          },
          downPullStyle: {
            height: "0px"
          },
          downPullText: '下拉刷新',
          downPullTYpe: 'no',
          upPullText: '上拉加载更多',
          isLoading: false
        });
      }, 500);
    }, _this.touchEnd = function () {
      var that = _this;
      var downPullTYpe = _this.state.downPullTYpe;

      if (downPullTYpe && downPullTYpe == 'get') {
        console.log(' 鼠标离开且未移动会触发事件-----', downPullTYpe);

        that.setState({ isLoading: true });
        that.props.dispatch({
          type: 'home/product',
          payload: {
            page: 1,
            mode: 1,
            type: 1,
            filter: 'sort:recomm|c:330602'
          }
        }).then(function (res) {
          console.log('home/product----====》》》》', res);
        });
      }

      that.reduction();
    }, _this.customComponents = ["AtActivityIndicator", "AtLoadMore", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        // 拖动上下滚动
        dragStyle: {
          top: "0px"
        },
        scrollY: true,
        creState: {},
        downPullText: '下拉刷新',
        status: 'more',
        isLoading: false
      };
      this.$$refs = new _index2.default.RefsArray();
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
      var _this2 = this;

      console.log('// 小程序上拉加载');
      this.setState({
        status: 'loading',
        isLoading: true
      });
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
      }).then(function (res) {
        console.log(_this2.props, '// 小程序上拉加载,-res===', res);
      });
    }

    // 滚动view

    // 鼠标点击移动开始触发事件


    // 推荐列表移动往上触发顶部回弹实现


    // 还原初始设置


    // 鼠标离开且未移动会触发事件

  }, {
    key: "_createData",


    // 

    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__0"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__0 = _genCompid2[0],
          $compid__0 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__1"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__1 = _genCompid4[0],
          $compid__1 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__2"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__2 = _genCompid6[0],
          $compid__2 = _genCompid6[1];

      var _props = this.__props,
          banneret = _props.banneret,
          banner = _props.banner,
          brands = _props.brands,
          productsList = _props.productsList,
          effects = _props.effects;
      var _state = this.__state,
          dragStyle = _state.dragStyle,
          scrollY = _state.scrollY,
          downPullStyle = _state.downPullStyle,
          downPullText = _state.downPullText,
          status = _state.status,
          isLoading = _state.isLoading;
      // console.log('this.props====>>>',this.props);

      var Threshold = 50;
      var anonymousState__temp = (0, _index.internal_inline_style)(downPullStyle);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(dragStyle);

      this.anonymousFunc0 = function () {
        _this3.getProduct();
      };

      var anonymousState__temp3 = {
        border: 'none'
      };
      var anonymousState__temp4 = {
        border: 'none'
      };
      _index.propsManager.set({
        "content": downPullText
      }, $compid__0, $prevCompid__0);
      _index.propsManager.set({
        "status": status,
        "moreText": "\u67E5\u770B\u6570\u636E",
        "loadingText": "\u6570\u636E\u52A0\u8F7D\u4E2D...",
        "noMoreText": "\u6CA1\u6709\u66F4\u591A\u4E86",
        "noMoreTextStyle": anonymousState__temp3,
        "moreBtnStyle": anonymousState__temp4
      }, $compid__1, $prevCompid__1);
      _index.propsManager.set({
        "isOpened": isLoading,
        "text": '加载中...',
        "status": 'loading'
      }, $compid__2, $prevCompid__2);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__0: $compid__0,
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        Threshold: Threshold,
        productsList: productsList
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Home;
}(_index.Component), _class2.$$events = ["touchStart", "touchRecMove", "touchEnd", "anonymousFunc0", "onReachBottom", "gotoDetail"], _class2.$$componentPath = "pages/home/index", _temp2)) || _class);
exports.default = Home;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Home, true));