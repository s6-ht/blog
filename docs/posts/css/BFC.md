---
title: css之bfc原理
date: 2020-09-24 00:27:57
tags: css
---

### 1. 前置知识
**box**   
box是css布局的基本单位，元素的类型和display属性决定了box的类型。不同的类型的盒子会参与不同的formatting context。

**block-level box**  
display属性为block、list-item(作为列表显示的元素)、table的元素会生成block-level box。

**formatting context**<br>
它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用

### 2. BFC定义
BFC（block formatting context）为块级格式化上下文，是一个独立渲染区域，并且只有block-level box参与，规定了block-level box内部的布局方式。


#### 3. 布局规则
- 内部的box会在垂直方向上一个接一个的放置  
- 同一个bfc内，两个相邻box元素的margin会产生重叠，重叠距离为数值大的margin值  
- BFC区域不会与浮动元素重叠  
- 计算BFC的高度时，浮动元素也参与计算  
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
- 每个元素的margin box的左边， 与 **包含块** border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此<br>

![](https://user-gold-cdn.xitu.io/2018/12/17/167bb90669c0571f?w=468&h=229&f=jpeg&s=18676)
### 4. 触发bfc的方法
- body跟元素；
- float不为none；
- position为absolute和fixed
- overflow不为visible
- display为inline-block、table-cell、flex、table-caption或者inline-flex；

### 应用场景
- 清除浮动(浮动元素也参与高度计算)
- 解决margin重叠(将两个元素置于不同的bfc)
- 自适应两栏布局(bfc区域不会与浮动元素重叠)

