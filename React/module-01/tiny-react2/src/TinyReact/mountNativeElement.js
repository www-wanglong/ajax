import createDOMElement from "./createDOMElement"
import createElement from "./createElement"
import mountElement from "./mountElement"
import unmountNode from "./unmountNode"

export default function mountNativeElement (virtualDOM, container, oldDOM) {
  let newElement = createDOMElement(virtualDOM)
  if (oldDOM) {
    unmountNode(oldDOM)
    container.insertBefore(newElement, oldDOM)
  } else {
    container.appendChild(newElement)
  }


  let component = virtualDOM.component
  if (component) {
    component.setDOM(newElement)
  }

}