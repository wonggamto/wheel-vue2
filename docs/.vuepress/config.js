module.exports = {
  base:'/wheel-vue2/',
  title: '极 UI',
  description: '一个好用的UI框架',
  themeConfig: {
    sidebar: [
      {
        title:'入门',
        children: [
          '/install/',
          '/get_started/',]
      },

      {
        title:'组件',
        children:[
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/tabs',
          // '/components/layout',
          // '/components/toast',
          // '/components/popover',
        ]
      }
    ]
  }
}