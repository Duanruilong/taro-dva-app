import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

import BanSwiper from "../../components/BanSwiper";

@connect(({home}) => ({
  ...home,
}))
export default class Home extends Component {
  config = {
    navigationBarTitleText: '首页',
  };
  //分享
  onShareAppMessage() {
    return {
      title: '基于Taro框架开发',
      path: '/pages/home/index',
    };
  }

  componentDidMount = () => {
    // 获取数据
    this.props.dispatch({
      type: 'home/load',
    });
  };

  render() {
    const { banner, brands, products_list, effects } = this.props;
    return (
      <View className="homePage">
        <BanSwiper banner={banner} home></BanSwiper>
      </View>
    )
  }
}
