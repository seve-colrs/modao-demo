import Vue from 'vue'
import App from './App.vue'
//引入element-ui
// import ElementUI from 'element-ui'
import '@/plugins/element.js'
//引入router实例
import router from '@/router/index.js'
// 引入Vuex.store实例
import store from '@/store'
//导入全局样式表
import '@/assets/css/global.css'
// 导入 字体图标
import '@/assets/fonts/iconfont.css'


Vue.config.productionTip = false

// Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')