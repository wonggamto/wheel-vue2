import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from './sider'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-footer',Footer)
Vue.component('g-content',Content)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-popover',Popover)
Vue.use(plugin)
new Vue({
  el: '#app',
  data: {
    selectedTab:'sports'
  },

  created() {

  },
  methods:{
    showToast3(){
      this.$toast(`Bottom${parseInt(Math.random()*100)}`, {
        position:'bottom',
        enableHtml:false,
        closeButton:{
          text:'close',
          callback(){
            console.log('已关闭')
          }
        },
        autoClose: true,
        autoCloseDelay: 3
      })
    }
    ,
    showToast2(){
      this.$toast(`Middle${parseInt(Math.random()*100)}`, {
        position:'middle',
        enableHtml:false,
        closeButton:{
          text:'close',
          callback(){
            console.log('已关闭')
          }
        },
        autoClose: true,
        autoCloseDelay: 3
      })
    },
    showToast1(){
      this.$toast(`Top${parseInt(Math.random()*100)}`, {
        position:'top',
        enableHtml:false,
        closeButton:{
          text:'close',
          callback(){
            console.log('已关闭')
          }
        },
        autoClose: true,
        autoCloseDelay: 3
      })
    },
    showToast(position){
      this.$toast(`提示${parseInt(Math.random()*100)}`, {
        position:'middle',
        enableHtml:false,
        closeButton:{
          text:'close',
          callback(){
            console.log('已关闭')
          }
        },
        autoClose: 3,
      })
    }
  }
})
