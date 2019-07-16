import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({home}) => ({
  ...home,
}))
export default class Home extends Component {
  config = {
    navigationBarTitleText: 'home',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="home-page">
        home11111111
      </View>
    )
  }
}
