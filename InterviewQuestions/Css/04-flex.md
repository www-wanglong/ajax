# 1. 基本概念
flex容器：采用flex布局的元素。
flex项目：容器所有的子元素

容器默认存在两根轴：水平主轴和垂直的交叉轴

# 2. 容器的属性(6)
- flex-direction：主轴的方向
- flex-wrap：如何换行
- flex-flow： flex-direction和flex-wrap的简写
- justify-content： 主轴的对齐方式
- align-items： 交叉轴的对齐方式
- align-content：定义多根轴线的对齐方式。

# 3. 项目属性（6）
- order：排序顺序
- flex-grow：放大比例，默认：0
- flex-shrink：缩小比例，默认： 1
- flex-basis：在分配多余空间之前，项目占据的主轴空间。默认：auto
- flex: flex-grow、flex-shrink、flex-basis简写。auto,none
- align-self：单个项目与其他项目不一样的对齐方式，可以覆盖`align-items`属性
