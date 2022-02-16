# react fiber渲染实现

fiber对象
```
{
  type 节点类型（元素，文本，组件）
  props 节点属性
  stateNode 节点 DOM 对象 | 组件实例对象
  tag 节点标记（hostRoot | hostComponent | classComponent | functionComponent）
  effects 数组，存储需要更改的 fiber 对象
  effectTag 当前 fiber 需被执行的操作（新增、删除、修改）
  parent 当前 fiber 的父级 fiber
  child 当前 fiber 的子级 fiber
  sibling 当前 fiber 的下一个兄弟 fiber
  alternate fiber 备份 fiber 比对时使用
}
```