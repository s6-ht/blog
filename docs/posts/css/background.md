---
title: css3之background
date: 2020-09-23 17:05:06
tags: css3 background
---

### 1、background-size  
决定 **背景图像**的大小  
*值*: auto（默认值） | length | precentage | cover | contain

（1）length：当设置`background-size: 100px 20px`表示背景图片宽为100，高为20<br>
（2）precentage: 当设置`background-size: 50% 50%`时，表示背景图片的宽高分别是当前容器宽高的50%<br>
当设置为`background-size: 100% 100%`为完整显示背景图片<br>
* 当length和precentage都只存在一个值时，则宽度为位当前值，高度为auto <br>
（3）cover：不考虑比例，让图片把容器充满，不一定显示出整个背景图片<br>
（4）contain：缩放背景图片，让背景图片完全显示出来

### 2、background-origin   
决定**背景图像**的*起始位置*<br>
**值**：border-box | padding-box（默认）| content-box

![](https://user-gold-cdn.xitu.io/2018/12/21/167ce85e718cb6af?w=518&h=393&f=jpeg&s=30516)  
（1）border-box: 从border的左上角部分开始<br>
（2）padding-box：从padding的左上角开始<br>
（3）content-box：从content的左上角开始
### 3、background-clip
决定**背景**的裁剪区域<br>
**值**：border-box（默认）| padding-box | content-box<br>
（1）border-box：从border向外裁剪，只留下border里面的部分<br>
（2）padding-box: 从padding向外裁剪，只留下padding里面的部分<br>
（3）content-box: 从content向外裁剪，只留下content里面的部分<br>

以上三个属性会相互影响，可能需要同时设计几个属性才能达到效果。
