/*
 * @Author: zhangjiawei
 * @Date: 2021-03-02 10:49:06
 */
// 构造函数
function Person() {
  this.name = 'zhangjiawei'
  this.say = function () {
    console.log('zhangjiawei222');
  }
}

const p1 = new Person()
console.log(p1.name);

// ES6 Class
class Person2 {
  constructor() {
    this.name = zhangjiawei
    this.age = 18
  }
  // 函数直接同级写
  say() {
    console.log('zhangjiawei');
  }
}
const p2 = new Person()
console.log(p2.name);
console.log(p2.say());
// 继承
class Teacher extends Person2 {
  // 复杂写法
  // constructor() {
  //   super()
  //   // 有重复的属性 自己的会覆盖继承的
  //   this.name = 'jiajia'
  //   this.score = 100
  // }
  // 简单写法
  state = {
    name: 'zhangjiawei',
    wife: 'leijiajia'
  }
  name = 'zhangjiawei2'
  score = 1000
  hello() {
    console.log('im\' hello');
  }

}
const p3 = new Teacher()
// 会报错，必须在继承的时候 constructor 里面super()
// super 是个Person --- 相当于调用了Person构造函数，然后将他的方法都放到了Teacher身上
console.log(p3.name);
