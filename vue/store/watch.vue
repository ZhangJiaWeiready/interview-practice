<!--
 * @Author: zhangjiawei
 * @Date: 2021-03-09 10:31:22
-->
<template>
  <div>
    11
  </div>
</template>
<script>
export default {
  
  name: 'dddd',
  data() {
    return {
      name: 'zhangjiawei',
      obj: {
        name: {
          agae: 26
        }
      }
    }
  },
  watch: {
    name(newValue, oldValue) {

    },
    // 想监听c的话
    'obj.name.agae'() {

    },
    obj: {
      deep: true, // deep为true意味着开启了深度监听，a对象里面的任何数据变化都会触发handler函数
      handler() {
        // handler是一个固定写法
        
      }
    }

  }
}
</script>