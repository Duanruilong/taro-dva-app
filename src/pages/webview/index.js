import Taro, { Component } from '@tarojs/taro';
import { View,WebView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({webview}) => ({
  ...webview,
}))
export default class Webview extends Component {
  config = {
    navigationBarTitleText: 'webview',
  };

  componentDidMount = () => {

  };

  render() {
    console.log('this.$router.params==>',this.$router);
    
    return (
      <View className="webview-page">
        <WebView src={this.$router.params.value} />
      </View>
    )
  }
}
