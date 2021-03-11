/*
 * @Author: zhangjiawei
 * @Date: 2021-03-02 11:05:35
//  */
// // 用promise解决回调地狱
// let p1 = new Promise(function (resolve, reject) {

// })
// p1.then(function () { }, function () { })



function* p() {
  yield 'hello' // 暂停
  yield 'world'
  return 'ending'
}
var n = p()
console.log(n.next()); // 刚开始直接打印n是一个Generator对象
// 需要通过.next() 获取下一个
