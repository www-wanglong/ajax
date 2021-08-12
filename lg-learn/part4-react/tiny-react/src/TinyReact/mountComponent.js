import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";

export default function mountComponent(virtualDOM, container, oldDOM) {

  let nextVirtualDOM = null
  let component = null

  // 判断组件是类组件还是函数组件
  if (isFunctionComponent(virtualDOM)) { //函数组件
    nextVirtualDOM = buildFunctionComponent(virtualDOM)
  } else { //类组件
    nextVirtualDOM = buildClassComponent(virtualDOM)
    component = nextVirtualDOM.component
  }

  if (component) {
    component.componentDidMount()
    if (component.props && component.props.ref) {
      component.props.ref(component)
    }
  }

  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container, oldDOM)
  } else {
    mountNativeElement(nextVirtualDOM, container, oldDOM)
  }

}

function buildFunctionComponent (virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {})
}

function buildClassComponent (virtualDOM) {
  const component = new virtualDOM.type(virtualDOM.props || {})
  const nextVirtual = component.render()
  nextVirtual.component = component
  return nextVirtual
}