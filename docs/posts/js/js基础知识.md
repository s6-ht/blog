---
title: js基础知识
date: 2020-09-25 08:00:24
tags: js
---

##### 1. 页面中script外部引入script内容的执行顺序
当`script`标签不存在defer和async属性时，`script`元素会按照他们在页面中出现的先后顺序依次被解析执行。  
*defer*： 脚本的加载和文档加载异步进行，但是脚本被言辞到文档完全被解析和现实之后再执行；  
*async*: 脚本的加载和文档加载异步进行, 脚本下载完成后会停止html解析，立刻执行脚本, 知道脚本解析完毕再继续解析html； 

同时存在defer和async，执行效果与async一致。

每个函数都包括两个属性：
length: 函数接收命名参数的个数
prototype: 指向原型对象

random获取某一个整数范围内的随机数

```javascript
let val = Math.floor(Math.random() * 可能值的总数 + 最小值
)
```
