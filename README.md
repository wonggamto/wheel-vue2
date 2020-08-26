# 轱辘 — 一个Vue2 的UI组件
  作者:薯条君	
[![Build Status](https://travis-ci.org/wonggamto/wheel-vue2.svg?branch=master)](https://travis-ci.org/wonggamto/wheel-vue2)
## 介绍
这是本人在学习Vue过程中做的一个UI框架，希望对你有帮助
## 开始使用

1. 添加 CSS 样式
    使用本框架前请在CSS中开启 border-box
    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE8及以上的浏览器都支持此样式。
    
    还需要设置默认颜色等变量(后续会更新为 SCSS 变量)
    ```
    html {
                --button-height: 32px;
                --font-size: 14px;
                --button-bg: white;
                --button-active-bg: #eee;
                --border-radius: 4px;
                --color: #999;
                --border-color: #999;
                --border-color-hover: #666;
            }
    ```
    IE15及以上浏览器支持此样式
 2.安装 wheel-vue2
 ```
    npm install --save wheel-vue2
```
3.引入 wheel-vue2
```
import{Button,ButtonGroup,Icon} from 'wheel-vue2'
import 'wheel-vue2/dist/index.css'

export default{
    name:'app',
    components:{
        HelloWorld,
        'g-button':Button,
        'g-icon':Icon
    }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码




