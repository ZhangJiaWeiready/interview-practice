/*
 * @Author: zhangjiawei
 * @Date: 2021-03-02 15:17:21
 */
console.log(1);
setTimeout(() => {
  console.log(2);
},0)
const p2 = new Promise((resolve) => {
  console.log(3);
  resolve()
})
p2.then(() => {
  console.log(4);
})
console.log(5);
// 涉及到了 异步同步
// promise构造函数是同步得
// .then是异步得
// 微任务优先执行
