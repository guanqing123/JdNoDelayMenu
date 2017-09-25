# 京东无延迟菜单

## Preview

![preview](https://github.com/guanqing123/JdNoDelayMenu/blob/master/img/preview.gif)
---

### 预备知识
+ HTML
+ CSS
+ Jquery 基础

### 课程安排
* 第一部分: 开发基本的菜单结构
* 第二部分: 开发普通的二级菜单效果
* 第三部分: 加入延迟解决移动问题
* 第四部分: 解决延迟引入的新问题

### 开发普通的二级菜单
- 事件代理方式进行绑定
- mouseenter 和 mouseover的区别:
 - 使用mouseover/mouseout时,如果鼠标移动到子元素上,即便没有离开父元素,也会触发父元素的mouseout事件;
 - 使用mouseenter/mouseleave时,如果鼠标没有离开父元素,在其子元素上任意移动,也不会触发mouseleave事件;
 
### 加入延迟来优化
+ 切换子菜单的时候,用setTimeout设置延迟
+ debounce 去抖技术:
 + 在事件被频繁触发时,只执行一次处理
 
### 基于用户行为预测的切换技术
* 跟踪鼠标的移动
* 用鼠标当前位置,和鼠标上一次位置与子菜单上下边缘形成的三角形区域进行[比较](#compare)

<span id="compare">
#### 如何比较
- 向量: Vab = Pb - Pa
- 二维向量叉乘公式:
	- a(x1,y1) * b(x2,y2) = x1*y2 - x2*y1
- 用叉乘法判断点在三角形内
</span>

### 最终效果
+ 鼠标自然的移动和点击子菜单
+ 切换时无延时