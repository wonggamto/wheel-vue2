import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
// 单元测试
{//icon测试
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'setting'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-setting')
  vm.$el.remove()
  vm.$destroy()
}
{//loading测试
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'setting',
      loading:true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
  vm.$el.remove()
  vm.$destroy()
}
{//order测试
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'setting',
      iconPosition:'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let order = window.getComputedStyle(svg).order
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}{//click测试
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'setting',
    }
  })
  vm.$mount()
  let spy = chai.spy(function (){})
  vm.$on('click',spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}
