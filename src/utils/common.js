/** 
 * 共用函数
*/

/** 时间格式的转换 */
// export const formatTime = time => {
//     `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}.${pad(time.getMilliseconds(), 3)}`
// }


/**
 * 显示成功提示
 * @param {*} text
 */
const showSuccess = text =>
  Taro.showToast({
    title: text,
    icon: 'success',
    duration: 2000
  });
   