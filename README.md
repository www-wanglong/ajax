## html常见问题
### 1.谷歌浏览器的内核？
    blink渲染引擎， webkit的分支。
### 2.图像标签(img)中哪个属性是必须写的？
    src
### 3.图像标签(img)中alt和title区别？
    alt图像不能正常显示时的提示。title是鼠标悬浮的提示
### 4.div和span区别
    div块级元素
    span行内元素(宽高无法通过css设置)
### 5.a打开新的窗口
    target="_blank"
    base标签设置整体链接的打开方式
### 6.table 的cellspacing属性是干嘛用的
    规定单元边沿与其内容之间的空白
### 7.格单元格怎么合并的
    td的rowspan and colspan
### 8.单标签是否闭合？
    HTML5的规范中，自闭合标签不加斜杠，但兼容加斜杠的写法；
    XHTML 严格要求自闭合标签要加斜杠；
    不加也可以。最好加上，增强代码的可读性。
### 9.css样式实现有哪些方式？
    行内样式、内部样式、外部样式
### 10.字体加粗的样式？
    font-width: 'bold' | 700
### 11.会在浏览器中直接修改样式吗？
### 12.CSS选择器有哪些？（至少5个）
    ·id选择器（#myId）
    ·类选择器（.myClassName）
    ·标签选择器（div, h1, p）
    ·后代选择器（h1 p）
    ·相邻后代选择器（子）选择器（ul > li）
    ·兄弟选择器（li~a）
    ·相邻兄弟选择器（li+a）
    ·属性选择器（a[rel="external"]）
    ·伪类选择器（a:hover, li:nth-child）
    ·伪元素选择器（::before, ::after）
    ·通配符选择器（*）
