---
title: js 之 string 详解
date: 2020-09-24 21:48:41
tags: js string
---




不改变原字符串，返回一个子字符串
slice(startIndex, endIndex)
substring(startIndex, endIndex)

从开始位置开始截取，不包括`endIndex`位置；但是传入负值的情况下，`slice`方法会将负值和字符串长度相加，`substring`将所有负值转为0；
substr(startIndex, num): num为返回的字符串的个数；传入负值时，将第一个参数加上字符串长度，第二个参数转换为0;


replace(str|reg, fn)

接收两个参数，第一个为正则对象或者一个字符串,为字符串时默认只替换第一个匹配到的子字符串,实现全部替换使用正则。

fn(match, pos, originalText)

match: 模式的匹配项(匹配到的内容)
pos: 模式匹配项在字符串中的位置
originalText:原始字符串

应用场景:
1. 将驼峰转换为下划线
```javascript
function toLowerLine(str) {
    let temp = str.replace(/[A-Z]/g, function (match) {	
		return "_" + match.toLowerCase();
  	});
  	if(temp.slice(0,1) === '_'){
  		temp = temp.slice(1);
  	}
	return temp;
};
```
2. 下划线转驼峰
```javascript
function toCamel(str) {
  	return str.replace(/([^_])(?:_+([^_]))/g, function (match, pos, originalText) {
	    return pos + originalText.toUpperCase();
  	});
}
```
