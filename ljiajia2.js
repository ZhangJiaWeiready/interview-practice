/*
 * @Author: zhangjiawei
 * @Date: 2021-03-10 17:26:38
 */
const data = [{
  "customerLevel": "KA", // name
  "industryFir": "Cultural Industries", // 取value  Cultural Industries  ---> ov的value 22222
  "industrySec": "industry2", //  遍历如果有同名的增加
  "ov": 22222222,
  "cloudSize": 10,
  "companyNum": 666666
},
{
  "customerLevel": "KA",
  "industryFir": "Government",
  "industrySec": "industry2",
  "ov": 33333333,
  "cloudSize": 10,
  "companyNum": 777777
},
{
  "customerLevel": "MSE",
  "industryFir": "Energy",
  "industrySec": "industry2",
  "ov": 44444444,
  "cloudSize": 11,
  "companyNum": 999999
}]

const result = data.reduce((pre, v) => {
  const { customerLevel, industryFir, ov, companyNum } = v
  const filterTargetIndex = pre.findIndex(item => item.name === customerLevel)
  let oldOutObj = {} 
  let oldInnerObj = {}
  if (filterTargetIndex !== -1) {
    const { name, industryOv, ...Others } = pre[filterTargetIndex]
    oldOutObj = Others
    oldInnerObj = industryOv
  }
  let outObj = {
    ...oldOutObj,
    [industryFir]: ov,
  }
  let innerObj = {
    ...oldInnerObj,
    [industryFir]: companyNum
  }
  // 新增的逻辑
  let obj = {
    name: customerLevel,
    ...outObj,
    industryOv: {...innerObj}
  }
  if (filterTargetIndex !== -1) {
    // name 之前存在的逻辑
    pre[filterTargetIndex] = obj
  } else {
    pre.push(obj)
  }
  return pre
}, [])
console.log(result);