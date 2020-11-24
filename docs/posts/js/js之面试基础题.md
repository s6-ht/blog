---
title: js之面试基础题
date: 2020-09-24 22:40:02
tags: js 面试
---

###### 2. 事件委托
利用事件冒泡原理，只指定一个事件处理程序，就可以管理某一类型的所有事件。即将本应该注册在子元素上的处理事件注册在父元素上，这样点击子元素发现其本身没有相应事件就到父元素上寻找，并作出响应。主要有以下两个优点：
- 减少事件注册，节省内存（不需为所有子元素添加事件）
- 动态添加的元素也具有该处理事件

缺点：
- 不支持不冒泡的事件
- 层级过多，可能会在一层被阻止冒泡
- 理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托，比如在ol上代理li，而不是在document上代理li
- 把所有事件都用代理就可能会出现事件误判。比如，在document中代理了所有button的click事件，另外的人在引用改js时，可能不知道，造成单击button触发了两个click事件。


###### 3. Object.create(proto) ?
该方法创建一个新对象，并使用现有的对象来提供新创建的对象的__proto__。即将新对象的原型指向现有对象。对新对象原型上的方法做修改，不影响原有对象。eg: 
```javascript
const person = {
  isHuman: false
};
const me = Object.create(person);
me.name = 'Matthew';
me.isHuman = true; // inherited properties can be overwritten

me.isHuman // true
person.isHuman // false
```

###### 4. js中类的静态方法、静态属性？
静态属性和方法只有构造函数可以调用，通过构造函数构造的实例也不可使用。

###### 5. 手写原生ajax
ajax是一种技术方案，`XMLHtppRequest`对象使浏览器可以发出http请求与接收http响应。
```javascript
var xhr = new XMLHtppRequest()
xhr.open('GET', url, true) // true代表异步请求
xhr.setrequestHeader('content-type', 'x-www-form-urlencoded') // post
xhr.send(data) // post时将数据放在send里面
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4) {
    	
    }
}
```
readyState 包含五种状态，详细如下：  
0: 请求未初始化  
1: 服务器连接已建立   
2. 请求已接收 
3. 请求处理中，正在下载响应体  
4. 请求已完成，且响应已就绪  
