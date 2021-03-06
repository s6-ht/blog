---
title: js操作符之运算转换规则
date: 2020-09-28 08:31:39
tags: js  操作符
---

##### 1. 加法操作符
在进行加性操作时，规则如下：
- +0 加 -0, 结果是+0
- 如果又一个操作符是字符串，则规则如下：
    - 两个操作数都为字符串，则拼接
    - 一个为字符串，则将另外一个转换为字符串，再拼接
    - 如果一个操作数为对象、数值、布尔值，则调用它们的toString方法，再执行上两条规则
    - undefined和null，分别调用String方法，获取到`'undefined'`和`'null'`    

##### 2. 相等操作符
转换规则：
- 如果一个数为布尔值，则在比较之前先转换为数值
- 如果一个为字符串，另一个为数值，则将字符串转换为数值再比较
- 如果一个为对象，另一个不是，则调用对象的`valueOf`方法，用得到的值按照上面的规则比较
- `null`和`undefined`相等
- 在比较相等性之前，不能将`null`和`undefined`转换成其他任何值
- 如果两个操作数都为对象，则比较他们是不是同一个对象


> `null == undefined`  返回true，因为它们是类似的值，但是`null === undefined`返回false, 因为他们是不同类型的值

