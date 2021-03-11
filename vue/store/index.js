/*
 * @Author: zhangjiawei
 * @Date: 2021-03-05 15:43:19
 */
import Vue from 'vue'
import vuex from 'vuex'
export default new vuex.Store({
  state: {

  },
  mutation: {

  },
  modules: {
    m1: {
      namespace: true,
      state: {
        count: 1
      },
      mutations: {
        // 同步
        setCount(state) {
          state.count = state.count +1
        }
      },
      actions: {
        increment(contexxt) {
          contexxt.commit('setCount')
        }
      },
      getters: {
        dobleCount(state) {
          return state.count * 2
        }
      }
    }
  }
})




import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  methods: {
    action: {
      ...mapMutations('m1', ['setCount']) // ----> this.setCount ==> this.$Store.commit('/m1/setCount)
      this.$store.dispatch('m1/increment')
    }
  }
}

