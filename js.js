/*
 * @Author: zhangjiawei
 * @Date: 2021-03-05 14:12:10
 */
const startTime = new Date().getTime()
let count = 0

setInterval(() => {
  let i = 0
  while (i++ < 10000);
}, 0)

setInterval(( ) => {
  count++
  console.log(`与原设定得时间间隔相差了:${new Date().getTime() - (startTime+count*1000)}`);
}, 1000)