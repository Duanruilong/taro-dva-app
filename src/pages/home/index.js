import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

import BanSwiper from "../../components/BanSwiper";
import GoodList from '../../components/GoodList';


@connect(({home,loading}) => ({
  ...home,
  ...loading,
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

    this.props.dispatch({
      type: 'home/product',
      payload:{
        page: 1,
        mode:1,
        type:1,
        filter: 'sort:recomm|c:330602'
      }
    });
  };

  gotoDetail=(item)=>{
    console.log('item',item);
    
    Taro.navigateTo({
      url: `/pages/webview/index?value=${item.value1.split('?')[0]}&${item.value1.split('?')[1]}`,
    });
  }

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
          type:1,
          filter: 'sort:recomm|c:330602'
        }
      });
    }

  render() {
    const { banneret, banner, brands, productsList, effects } = this.props;
    console.log('this.props====>>>',this.props);
    
    return (
      <View className="homePage">
        {/* <BanSwiper banner={banner} home></BanSwiper> */}
        <BanSwiper banneret={banneret.special_topics} banner={banneret.stars} home></BanSwiper>
        <View className="centBox">
          <Text className="recommend">为你推荐</Text>
        </View>
        <View className="centPai">
        {brands.map((item,index)=>{
          return(
            <View onClick={this.gotoDetail.bind(this,item)} className="centList" key={index}>
              <Image mode="widthFix" src={item.image_src} />
            </View>
          )
        })}
          
        </View>
        <Text className="recommend">女神名人堂</Text>
        <View className='goddess'>
          <BanSwiper banneret={banneret.stars} banner={banneret.stars} home={false}></BanSwiper>
        </View>
        <Text className="recommend">为你推荐</Text>
        <GoodList list={productsList} loading={effects && effects['home/product']}></GoodList>
      </View>
    )
  }
}
