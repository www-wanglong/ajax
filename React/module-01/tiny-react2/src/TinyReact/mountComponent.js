import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountElement from "./mountElement";
import mountNativeElement from "./mountNativeElement";

export default function mountComponent (virtualDOM, container, oldDOM) {

  // 区分类组件还是函数组件
  let nextVirtualDOM = null
  let component = null
  if (isFunctionComponent(virtualDOM)) {
    // 函数组件
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
  } else {
    nextVirtualDOM = buildClassComponent(virtualDOM)
    component = nextVirtualDOM.component
  }

  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container)
  } else {
    mountNativeElement(nextVirtualDOM, container, oldDOM)
  }

  if (component) {
    component.componentDidMount()
    if (component.props && component.props.ref) {
      component.props.ref(component)
    }
  }

}

function buildClassComponent (virtualDOM) {
  const component = new virtualDOM.type(virtualDOM.props || {})

  const nextVirtualDOM = component.render()
  nextVirtualDOM.component = component
  return nextVirtualDOM
}

function buildFunctionComponent (virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {})
}