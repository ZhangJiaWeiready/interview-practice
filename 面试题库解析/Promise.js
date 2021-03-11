/*
 * @Author: zhangjiawei
 * @Date: 2021-03-10 10:04:52
 */
const first =() => ( new Promise((resolve, reject) => {
  console.log(3);
  let p = new Promise((resolve, reject) => {
    console.log(7);
    setTimeout(() => {
      console.log(5);
      resolve(6)
    },0)
    resolve(1)
  })
  resolve(2)
  p.then((arg) => {
    console.log('arg===>', arg);
  })
}))
first().then((arg) => {
  // 2
  console.log(arg);
})

console.log(4);

// new promise是同步, setTimeout是宏任务 .then是微任务 
// 同步 > 微任务 > 宏任务
// 队列 --- 先进先出
// new Promise是立即执行函数
// 一个promise只能有一个resolve
// a
/**
 * 3
 * 7
 * 4
 * 1.
 * 2
 * 5
 * 6 // 不执行
 */
// 链式调用s
class Test {
  then() {
    console.log(666);
    return this
  }
}
const p = new Test()
p.then().then().then()



class Test2{
  then() {
    console.log('2222');
    return new Test2()
  }
}

// pending 一般是不用返回this