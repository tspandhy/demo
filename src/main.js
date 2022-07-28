import Vue from 'vue'
import App from './App.vue'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import axios from 'axios'

import Avue from "@smallwei/avue"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'

let options = {
  fullscreenEl: true, //控制是否显示右上角全屏按钮
  closeEl: false, //控制是否显示右上角关闭按钮
  tapToClose: true, //点击滑动区域应关闭图库
  shareEl: true, //控制是否显示分享按钮
  zoomEl: true, //控制是否显示放大缩小按钮
  counterEl: true, //控制是否显示左上角图片数量按钮
  arrowEl: true,  //控制如图的左右箭头（pc浏览器模拟手机时）
  tapToToggleControls: true, //点击应切换控件的可见性
  clickToCloseNonZoomable: true //点击图片应关闭图库，仅当图像小于视口的大小时
}
Vue.use(ElementUI, {
  size: 'small',
  menuType: 'text'
})
Vue.use(preview, options)
Vue.use(Avue)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
