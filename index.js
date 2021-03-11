/*
 * @Author: zhangjiawei
 * @Date: 2021-03-01 19:06:43
 */
/**
 * [1, 2, 3].map(parseInt) what & why?
 * 注：
 *  map接收两个参数第一个是个回调函数(callback) 
 *    callback可以接收三个参数 1.代表当前被处理得元素，2.代表元素得索引
 *  parseInt是用来解析字符串得，使字符串成为指定基数得整数，接收两个参数，
 *    1. 表示被处理得值(字符串), 2. 表示为解析时得基数
 *  了解这两个函数后，我们模拟一下运行情况
 */
const a = [1, 2, 3].map(parseInt)
// console.log(a);
console.log(parseInt('2', 1));



// 2. 什么是防抖和节流
// 防抖 --- 触发高频事件后n秒后函数只会执行一次，如果n秒内高频事件再次被触发则重新计算时间
function debounce() {
  let timeout = null
  return function () {
    clearTimeout(timeout) 
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, 500)
  }
}

function sayHi() {
  console.log('防抖成功',);
  const inp = document.getElementById('inp')
  
}