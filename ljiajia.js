/*
 * @Author: zhangjiawei
 * @Date: 2021-03-10 14:42:46
 */
const arr = [{
  "industry": "Energy",
  "industry2": "Cultural Industries",
  "totalNum": 647,
  "unreachableNum": 390, //
  "nurturingNum": 62, //
  "followUpNum": 64, //
  "lessGc5Num": 65, //
  "gc5Num": 66 //
},
{
  "industry": "Government",
  "industry2": "Cultural Industries",
  "totalNum": 647,
  "unreachableNum": 390,
  "nurturingNum": 62,
  "followUpNum": 64,
  "lessGc5Num": 65,
  "gc5Num": 66
},
]

// industru ---> industry
// 
function handleA(targetArr) {
  const resultArr = []
  for (let i = 0; i < targetArr.length; i++) {
    const { industry, industry2, ...others } = targetArr[i]
    console.log(others);
    // const getKey = Object.keys(targetArr[i])
    // const filterNoKeys = getKey.filter(v => !noNeedKeys.includes(v))
    // filterNoKeys.forEach(item => {
    //   let resultObj = {}
    //   resultObj.industry = targetArr[i].industry
    //   resultObj.name = item
    //   resultObj.value = targetArr[i][item]
    //   resultArr.push(resultObj)
    // })
  }
  return resultArr
}

console.log('3---->', handleA(arr));

const result = arr.reduce((pre,v) => {
  const {industry, industry2, ...other} = v
  const now = Object.keys(other).map(m => {
    return {
      name: m,
      value: other[m],
      industry
    }
  })
  pre.push(...now)
  return pre
}, [])
console.log(result)
