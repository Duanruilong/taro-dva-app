import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * 首页部分
 *
 * @author Drlong
 * @date 2019-07-16
 * @export
 * @class BanSwiper
 * @extends {Component}
 */
export default class BanSwiper extends Component {

	static propTypes = {
		banner: PropTypes.array,
		home: PropTypes.bool
	}

	static defaultProps = {
		banner: [],
		home: false
	}

	
/**
 *跳转详情页
 *
 */
gotoDetail=(item)=>{
	console.log('item',item);
	
	Taro.navigateTo({
		url: `/pages/about/index?value=${item.value1}`,
	});
}

render() {
		const { banner, home } = this.props;
		return (
			<Swiper
				className={!home ? 'swiper-container' : 'swiper'}
				circular
				indicatorDots
				indicatorColor="#999"
				indicatorActiveColor="#bf708f"
				autoplay
			>
				{banner.map((item, index) => (
					<SwiperItem key={index} >
						<Image onClick={this.gotoDetail.bind(this, item)} mode="widthFix" src={`${item.image_src}!w750`} />
					</SwiperItem>
				))}
			</Swiper>
		)
	}



}