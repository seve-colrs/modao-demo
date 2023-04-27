import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //控制产品框 是否显示
        pocShow: false,
        //控制技术框 是否显示
        tecShow: false,
        //控制历史框 是否显示
        hisShow: false,
        //控制动画历史框dy3 是否显示
        hisDyShow: false
    }
})

export default store