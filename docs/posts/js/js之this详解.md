---
title: js 之 this 详解
date: 2020-09-24 21:48:41
tags: js this
---

this是在函数<font color=red>被调用</font>的时候决定的，而不是被定义的时候

1. this指向指的是被调用这个函数内部的this指向;
2. 每次产生执行上下文时，确定this指向，也就是说，只有全局和函数才有this指向

3. 默认绑定，即函数没有被谁调用,此时this指向window,如果未指定call里面的第一个参数，则为window,严格模式下为undefined
```
function foo() {
    consoleo.log(this)
}
foo()   // window   foo.call(null/undefined)  
```
4. 隐性绑定,无论前面层级，this指向被调用函数的上一级
```
function foo() {
    console.log(this)
}
var obj = {
    name: '123
}
obj.foo()   //   obj
```
5. call/apply/bind   被调用函数指向当前方法所传入的第一个参数
```
function foo(){
    console.log(this.a);
}
var obj = { a : 10 };

foo = foo.bind(obj);
foo();    // obj
```
6. new 绑定，此时this绑定为新创建的对象，`var bar = new foo();` 函数 foo 中的 this 就是一个叫foo的新创建的对象 , 然后将这个对象赋给bar

7. 箭头函数
箭头函数中的this一旦被绑定就无法修改
箭头函数关联父级作用域this
```
var obj= {
    that : this,
    bar : function(){
        return ()=>{
            console.log(this);
        }
    },
    baz : ()=>{
        console.log(this);
    }
}
console.log(obj.that);  // window
obj.bar()();            // obj
obj.baz();              // window
```
此时obj的当前作用域是window,this也就指向window,如果不使用函数将箭头函数包裹起来，this指向window,包裹起来，此时箭头函数的作用域就是当前这个对象


例题解析：
```
function foo(arg) {
    this.a = arg;
    return this
};

var a = foo(1);
var b = foo(10);

console.log(a.a); // undefined
console.log(b.a); // 10
```
当`var a = foo(1)`执行完成后，foo函数体为`window.a = 1; return window`,此时foo(1)函数返回结果为window，则 `var a = window`,由于`var a = window.a`,所以此式为`window.a = window`,


```
function foo() {
    getName = function() {
        <!-- 此处的getName将创建到window上 -->
        console.log(1);
    };
    return this;
}
foo.getName = function() {
    <!-- 是直接添加到foo上的 -->
    console.log(2);
};
foo.prototype.getName = function() {
    <!-- 这个getName直接添加到foo的原型上，在用new创建新对象时将直接添加到新对象上 -->
    console.log(3);
};
var getName = function() {
    <!-- 创建到window上 -->
    console.log(4);
};

function getName() {
    这个函数创建在window上，由于函数提升，此函数将被覆盖
    console.log(5);
}

foo.getName(); // 2
getName(); // 4
foo().getName(); // 1
getName(); // 1
new foo.getName(); // 2
new foo().getName(); // 3
<!-- 这里特别的地方就来了,new 是对一个函数进行构造调用,它直接找到了离它，最近的函数,foo(),并返回了应该新对象,等价于 var obj = new foo();obj.getName(); 这样就很清晰了,输出的是之前绑定到prototype上的，那个getName  3 ,因为使用new后会将函数的prototype继承给 新对象 -->

new new foo().getName(); // 3
<!-- var obj = new foo();
var obj1 = new obj.getName(); -->
```
