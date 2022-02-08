import isFunction from './isFunction'
import mountNativeElement from './mountNativeElement'
import mountComponent from './mountComponent'

export default function mountElement (virtualDOM, container, oldDOM) {
  // Component VS NativeElement
  if (isFunction(virtualDOM)) {
    mountComponent(virtualDOM, container, oldDOM)
  } else {
    mountNativeElement(virtualDOM, container, oldDOM)
  }
}