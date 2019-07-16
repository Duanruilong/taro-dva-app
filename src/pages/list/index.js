import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({list}) => ({
  ...list,
}))
export default class List extends Component {
  config = {
    navigationBarTitleText: 'list',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="list-page">
        list
      </View>
    )
  }
}
