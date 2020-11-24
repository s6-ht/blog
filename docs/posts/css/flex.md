---
title: css之flex布局
date: 2020-09-24 08:31:32
tags: css flex
---
### 1. 概述
flex布局意为弹性布局，为一维布局。它的属性主要由容器属性和项目属性构成。
容器属性包括：
	1. justify-content
    2. align-items
    3. align-content
    4. flex-direction
    5. flex-wrap
    6. flex-flow
项目属性包括：
	1. flex-grow
    2. flex-shrink
    3. flex-basis
    4. align-self
    5. flex
    6. order
    
### 2. 容器属性
1. justify-content 决定项目在主轴（水平）上的排列方式，取值为：
```css
flex-start
center
flex-end
space-bewteen: 两端对齐，轴线之间的间隔平均分布
space-evenly: 项目之间间隔均匀分布
space-around： 项目两侧的间距一样，因此两个项目中间的间距是两边的两倍
```
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08d629f788fc40d094b4fa683d8581f9~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dbac9a3fcb3f449387ff50a559c1681d~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5452af0a6e6e4cce99202f123665a7c0~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c6229d623424627bfd62045a9b24a9a~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a1dce52001e841bc961f1943b33c2cac~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5de9b3fde074ad6b1e2eb94cabe22a6~tplv-k3u1fbpfcp-zoom-1.image)
2. align-items 决定项目在交叉轴（垂直）方向的排列方式
```css
flex-start：交叉轴的起点对齐
center: 交叉轴的中心对齐
flex-end: 交叉轴的终点对齐
baseline: 基于第一行文字的基线对齐
stretch: 默认值，如果项目未设置高度或者为auto，则将占满整个容器
```
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/858bc1d648b3400aa424864eacb4b009~tplv-k3u1fbpfcp-zoom-1.image)
3. align-content 在垂直方向，定义多根轴线的排列方式，只有一根轴线时不起作用
```css
flex-start
center
flex-end
space-bewteen
space-around
space-evenly
stretch：默认值，如果项目未设置高度或者为auto，则将占满整个容器
```
4. flex-direction 定义项目的排列方向（主轴方向）
```css
row: 主轴为水平方向，起点在左端
column
row-reverse
column-reverse
```
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88d848c6712a4063a6f0a36440765555~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4eadd57b266446a88bf9f521f04b8a96~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41967377050e472f88614b5e77871392~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5de393ff395d47ffabd1000c21d649eb~tplv-k3u1fbpfcp-zoom-1.image)
5. flex-wrap 如果一条轴线排不下，怎么换行
```css
wrap
nowrap
wrap-reverse: 换行，第一行在下方
```
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd8c46ced6664109bf0e98bdd5f824a9~tplv-k3u1fbpfcp-zoom-1.image)
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ca3dfb6c11a43c0ac064d571c0f718e~tplv-k3u1fbpfcp-zoom-1.image)
6. flex-flow  为flex-direction 和flex-wrap的简写形式，默认`row nowrap`

### 3. 项目属性
1. flex-grow
- 在有剩余空间时，项目的放大比例，默认为0, 即不放大。如果一个项目放大，其余的项目都不当大，则该项目会独占所有剩余空间；否则按照剩余空间比例进行分配。
2. flex-shrink
- 在空间不足时，项目的缩小比例，默认为1, 空间不足时，项目将缩小。如果一个项目的`flex-shrink: 0`，其余项目的缩小比例为1，则该项目不缩小，其他项目等比缩小。
3. flex-basis
- 定义了在计算剩余空间之前，项目所占的主轴空间，默认为`auto`, 即项目的本来大小。浏览器根据这个属性，计算是否有剩余空间。
4. align-self
- 定义了项目在交叉轴上的排列方式，覆盖align-items属性
```css
auto
flex-start
flex-end
center
baseline
stretch
```
5. flex	
- flex-grow、flex-shrink、flex-basis 的简写，默认为0 1 auto；
- flex: 1(1 1 auto) | none(0 0 auto)
6. order
- 按照数字大小进行排列，数字小的排在前面


