import createDOMElement from './createDOMElement'
import unmountNode from './unmountNode'

export default function mountNativeElement(virtualDOM, container, oldDOM) {

  let newElement = createDOMElement(virtualDOM)
  if  (oldDOM) {
    container.insertBefore(newElement, oldDOM)
  } else {
    // 将转换之后的DOM对象放置到页面中
    container.appendChild(newElement)
  }
  // 判断旧的dom是否存在
  if (oldDOM) {
    unmountNode(oldDOM)
  }

  let component = virtualDOM.component

  if (component) {
    component.setDOM(newElement)
  }
}