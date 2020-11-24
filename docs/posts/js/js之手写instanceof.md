---
title: js之手写instanceof
date: 2020-10-03 21:15:57
tags: js instanceof
---

##### 1. 概念

`A instanceof B`：意为判断A的原型链上是否存在B的原型对象，存在则返回`true`，否则返回`false`


##### 2. 手写实现

```javascript
function _instanceof(A, constructor) {
  let O = constructor.prototype
  A = A.__proto__
  while(true) {
    if (A === null) {
        return false
    }else if (O === A) {
        return true
    }
    A = A.__proto__
  }
}

```
