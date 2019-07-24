import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import GoodList from '../../components/GoodList';


import './index.scss';


@connect(({home,list,loading}) => ({
  ...home,
  ...list,
  ...loading,
}))
export default class List extends Component {
  config = {
    navigationBarTitleText: '列表',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'home/product',
      payload:{
        page: this.props.page + 1,
        mode:1,
        type:0,
        filter: 'sort:recomm|c:330602'
      }
    });
  };

     // 小程序上拉加载
     onReachBottom() {
      this.props.dispatch({
        type: 'home/save',
        payload: {
          page: this.props.page + 1,
        },
      });
      this.props.dispatch({
        type: 'home/product',
        payload:{
          page: this.props.page + 1,
          mode:1,
          type:0,
          filter: 'sort:recomm|c:330602'
        }
      });
    }

  render() {
    const { banneret, banner, brands, productsList, effects } = this.props;
    console.log('this.props==list-----==>>>',this.props);

    return (
      <View className="list-page">
        <GoodList list={productsList} loading={effects && effects['home/product']}></GoodList>
      </View>
    )
  }
}
