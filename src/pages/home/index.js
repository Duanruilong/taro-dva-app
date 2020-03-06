import Taro, { Component } from '@tarojs/taro';
import { View, Block, ScrollView } from '@tarojs/components';
import { AtActivityIndicator, AtLoadMore, AtToast } from 'taro-ui';

import { connect } from '@tarojs/redux';
import './index.scss';
import { showSuccess } from "../../utils/common";

import BanSwiper from "../../components/BanSwiper";
import GoodList from '../../components/GoodList';


@connect(({home,loading}) => ({
  ...home,
  ...loading,
}))
export default class Home extends Component {
    constructor(){
        super(...arguments);
        this.state={
             // 拖动上下滚动
            dragStyle: {
                top: 0 + 'px'
            },
            scrollY:true,
            creState:{},
            downPullText: '下拉刷新',
            status: 'more',
            isLoading:false,
        }
    }
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


  getProduct=()=>{

    console.log('getProduct----->>>>>>>>>>>');
      
    this.setState({
        status: 'loading',
        // isLoading:true
    });
    this.props.dispatch({
        type: 'home/product',
        payload:{
          page: 1,
          mode:1,
          type:1,
          filter: 'sort:recomm|c:330602'
        }
      }).then((res)=>{
        this.setState({
            status: 'more',
            isLoading:false
        });
      })
  }

  gotoDetail=(item)=>{
    console.log('item',item);
    
    // Taro.navigateTo({
    //   url: `/pages/webview/index?value=${item.value1.split('?')[0]}&${item.value1.split('?')[1]}`,
    // });
  }

    // 小程序上拉加载
    onReachBottom() {
        console.log('// 小程序上拉加载');
        this.setState({
            status: 'loading',
            isLoading:true
        });
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
        }).then((res)=>{
            console.log(this.props,'// 小程序上拉加载,-res===',res);
            
        })
    }

    // 滚动view

  // 鼠标点击移动开始触发事件
  touchStart = e => {
    let that = this;
    that.setState({
      creState: e.touches[0]
    });
  };

 // 推荐列表移动往上触发顶部回弹实现
  touchRecMove = e => {
    e.stopPropagation();
    let that = this;
    let move = e.touches[0]; //移动时的位置
    let deviationX = 0.3; //左右偏移量(超过这个偏移量不执行下拉操作)
    let deviationY = 70; //拉动长度（低于这个值的时候不执行）
    let maxY = 100; //拉动的最大高度

    let start_x = that.state.creState.clientX;
    let start_y = that.state.creState.clientY;
    let move_x = move.clientX;
    let move_y = move.clientY;

    //得到偏移数值
    let dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y);
    //当偏移数值大于设置的偏移数值时则不执行操作
    if (dev < deviationX) {
        // 超过deviationX这个偏移量不执行下拉操作
      //拖动倍率
      let dragY = Math.abs(move_y - start_y) / 3.5;
      //下拉操作
      if (move_y - start_y > 0) {
        if (dragY >= deviationY) {
        //    console.log('dragY >= deviationY===>>>>>',dragY ,'>=', deviationY);
           
            that.setState({
                downPullText: '释放刷新',
                downPullTYpe: 'get',
                // isLoading:true
            });
        } else {
          that.setState({
            downPullText: '下拉刷新',
            downPullTYpe:'no',
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
  };


  // 还原初始设置
  reduction = () => {
    let time = 0.5;
    let that = this;
    that.setState({
      dragStyle: {
        top: 0 + 'px',
        transition: `all ${time}s`
      },
      downPullStyle: {
        height: 0 + 'px',
        transition: `all ${time}s`
      },
      scrollY: true
    });

    setTimeout(() => {
        console.log('`````````````````````~~~~~~~~~~~~~`setTimeout---');
        
      that.setState({
        dragStyle: {
          top: 0 + 'px'
        },
        downPullStyle: {
          height: 0 + 'px'
        },
        downPullText: '下拉刷新',
        downPullTYpe:'no',
        upPullText: '上拉加载更多',
        isLoading:false
      });
    }, time * 1000);
  };

  // 鼠标离开且未移动会触发事件
  touchEnd = () => {
    let that = this;
    const{downPullTYpe}=this.state;
    if(downPullTYpe && downPullTYpe == 'get'){
        console.log(' 鼠标离开且未移动会触发事件-----',downPullTYpe);

        that.setState({isLoading:true})
        that.props.dispatch({
            type: 'home/product',
            payload:{
                page: 1,
                mode:1,
                type:1,
                filter: 'sort:recomm|c:330602'
            }
        }).then((res)=>{
            console.log('home/product----====》》》》',res);
        })
    }
    
    that.reduction();
  };

  


    // 

  render() {
    const { banneret, banner, brands, productsList, effects } = this.props;
    const {dragStyle,scrollY, downPullStyle, downPullText, status, isLoading} = this.state;
    // console.log('this.props====>>>',this.props);
    const Threshold = 50;
    return (
      <View className="homePage">
        {/* <BanSwiper banner={banner} home></BanSwiper> */}
        {/* <BanSwiper banneret={banneret.special_topics} banner={banneret.stars} home></BanSwiper> */}
        {/* <View className="centBox">
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
        <Text className="recommend">女神名人堂</Text> */}
        
        <View className='tab-content'>
            <View className="downDragBox" style={downPullStyle}>
                <AtActivityIndicator content={downPullText} />
            </View>
            <ScrollView
                style={dragStyle}
                scrollY={scrollY}
                className={'tab-container'}
                upperThreshold={Threshold} // 距顶部/左边多远时（单位 px），触发 scrolltoupper 事件
                lowerThreshold={Threshold} // 距底部/右边多远时（单位 px），触发 scrolltolower 事件
                onTouchStart={this.touchStart}
                onTouchMove={this.touchRecMove}
                onTouchEnd={this.touchEnd}
                onScrollToUpper={()=>{this.getProduct()}}
                onScrollToLower={this.onReachBottom}
                scrollWithAnimation={true} // 在设置滚动条位置时使用动画过渡
                >
                <View className="tab-content">
                    {productsList.map((item,index)=>{
                        return(
                        <View onClick={this.gotoDetail.bind(this,item)} className="centList" key={index}>
                            <Image mode="widthFix" src={item.cover_image} className='down-img'/>
                            <Text >{item.name}</Text>
                        </View>
                        )
                    })}
                </View>
                <View className="upDragBox">
                  <AtLoadMore
                    status={status}
                    moreText="查看数据"
                    loadingText="数据加载中..."
                    noMoreText="没有更多了"
                    noMoreTextStyle={{
                      border: 'none'
                    }}
                    moreBtnStyle={{
                      border: 'none'
                    }}
                  />
                </View>
                <AtToast isOpened={isLoading} text={'加载中...'} status={'loading'} ></AtToast>
            </ScrollView>

          
        </View>



        {/* <View className='goddess'>
          <BanSwiper banneret={banneret.stars} banner={banneret.stars} home={false}></BanSwiper>
        </View> */}
        {/* <Text className="recommend">为你推荐</Text> */}
        {/* <GoodList list={productsList} loading={effects && effects['home/product']}></GoodList> */}
      </View>
    )
  }
}
