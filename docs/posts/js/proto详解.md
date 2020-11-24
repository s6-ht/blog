---
title: js系列---prototype/constructor/__proto__详解
date: 2020-09-24 21:51:32
tags: js 
---


```
function Foo(name,age) {
    this.name = name;
    this.age = age;
}

var f1 = new Foo();
```
#### 1. 基础知识
1. `__proto__`和`constructor`是对象所独有的， `prototype`是函数所独有的，但是函数也是一种对象，所以也有`__proto__`和`constructor`属性
2. `prototype`是作用是让该函数构建的实例对象可以找到公有的属性和方法，即`f1.prototype = Foo.prototype`
3. `__proto__`的作用是当访问一个对象的属性时，如果该对象内部不存在该属性，则去`__proto__`属性所指向的原型对象里找，一直找到`__proto__`属性的终点<font color=red>null</font>,返回`undefined`,通过`__proto__`属性将对象连接起来的链叫原型链
4. `constructor`指向该对象的构造函数，最终都指向`Function`

#### 1. prototype属性
创建一个函数的时候，会同时创建一个prototype属性和一个原型对象，并且prototype属性指向这个原型对象，即Foo.prototype(属性) = Foo.prototype(原型对象)==

`prototype`属性是<font color=red>函数</font>所独有的，它是从<font color=red>一个函数指向一个对象</font>，即此函数的<font color=red>原型对象</font>（也是所创建的实例的原型对象）。它包含<font color=red>实例共享的属性和方法</font>，当使用new操作符调用的时候，所创建的实例从原型对象上得到公有的属性和方法。

![image](https://img-blog.csdn.net/20180725215624971?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NjMTg4Njg4NzY4Mzc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

#### 2. `__proto__`(null不具有该属性)
`__proto__`是<font color=red>对象</font>独有的，它是<font color=red>从一个对象指向一个对象</font>，即指向他们的<font color=red>原型对象(父对象)</font>，即`f1. __proto__ = Foo.prototype`,它的作用是当访问一个对象的属性时，如果对象内部不存在这个属性，那就会去 `__proto__` 属性所指向的那个对象里去找，直到找到原型链的顶端`null`,如果没找到则返回`undefined`,通过  `__proto__`方式来将对象连接起来直到`null`的这条链即为<font color=red>原型链</font>。
![image](https://img-blog.csdn.net/20180725213654251?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NjMTg4Njg4NzY4Mzc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

#### 3. constructor
`construcor`是对象所独有的，指向prototype属性所在函数。它是从<font color=red>一个对象指向一个函数</font>，含义是指向<font color=red>该对象的构造函数</font>, `function` 对象比较特殊，他的构造函数是自己，因此它既可以看做一个函数，又可以看做一个对象，所有函数都是通过构造函数得来，因此  `constructor` 的终点就是 <font color=red>Function**</font>.
![image](https://img-blog.csdn.net/20180726092751467?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NjMTg4Njg4NzY4Mzc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

从constructor 这个属性来讲，只有prototype对象才有。但是每个函数在创建的时候，js 会创建一个该函数对应的prorotype对象，eg:
```javascript
function Person() {}

let f1 = new Person()

f1.__proto__ === Person.prototype
Person.prototype.constructor = Person
```
因此，通过函数创建的对象即使自己没有constructor属性，它也能通过__proto__找到对应的constructor，所以任何对象最终都可以找到其构造函数（null如果当成对象的话，将null除外）

![image](https://img-blog.csdnimg.cn/20190311192013184.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NjMTg4Njg4NzY4Mzc=,size_16,color_FFFFFF,t_70#pic_center)



<h4>4. new 实例化过程</h4>
1. 创建Foo类型的新对象
2. 对象中的隐式属性`__proto__`指向Foo的原型对象`Foo.prototype`，此时原型对象中的`this`指向这个新对象
3. 执行构造函数的内容体
4. 返回这个新对象
- 实现new 
```javascript
function myNew = function(fn, ...args) {
    var obj = {}
    obj.__proto__ = fn.prototype
    const res = fn.apply(obj, args)
    return res instanceof Object ? res : obj
}
```
