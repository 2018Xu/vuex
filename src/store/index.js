import Vue from 'vue'
import Vuex from 'vuex'
// vuex的引入和使用为什么在vuex中，因为需要import vuex from 'vuex'之前
// 如果在Count.vue中写，import语句都会在预编译阶段被提升到最前面，就出现import再Vue.use(vuex)
Vue.use(Vuex)
import day from './day.js'
import gift from './gift.js'
export default new Vuex.Store({  
  modules: {
    day:day,
    gift:gift
  }
})
