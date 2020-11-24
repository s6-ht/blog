---
title: css3 之 transform
date: 2020-09-24 21:37:24
tags: css transform
---


==以下方式默认旋转基点都是元素中心点==
1. rotate(xdeg)旋转x角度  正数顺时针，负数逆时针
2. scale(x,y)
(1). 一个参数时，水平和垂直同时缩放该倍<br>
(2). 两个参数时，水平x,垂直y<br>
(2). zoom方式也可以实现元素缩放，不过缩放中心点事元素左上角
3. skew(xdeg,ydeg)
(1). 一个参数时，水平旋转<br>
(1). 两个参数时，水平旋转x,垂直旋转y<br>
##### 4. transform-origin  基准点， 默认为元素中心点
##### 5. skew()  扭曲
* skewX: 围绕着中心点x轴旋转，为正值时，逆时针旋转，复制顺时针旋转
* skewY: 围绕着中心点Y轴旋转，正值时顺时针旋转，复制逆时针
* x轴和y轴和普通坐标轴相反<br>
eg:<br>
![](https://user-gold-cdn.xitu.io/2018/12/27/167edada865fdcf8?w=656&h=434&f=jpeg&s=10667)
skewX(10deg):
![](http://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/p/www_wutongwei_com/27496e2a3f1759b137501274e44d9cd6.jpg)
skewY(10deg)
![](http://tc.sinaimg.cn/maxwidth.2048/tc.service.weibo.com/p/www_wutongwei_com/1bd097f3e09ca44bd137579bc74c096e.jpg)
