import diff from "./diff"

/**
 * 组件更新
 *
 * @param {*} virtualDOM
 * @param {*} oldComponent
 * @param {*} oldDOM
 * @param {*} container
 */
export default function updateComponent (
  virtualDOM,
  oldComponent,
  oldDOM,
  container
) {

  oldComponent.componentWillReceiveProps(virtualDOM.props)

  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    // 未更新的props
    let prevProps = oldComponent.props
    oldComponent.componentWillUpdate(virtualDOM.props)

    // 组件更新
    oldComponent.updateProps(virtualDOM.props)
    // 获取最新的
    let nextVirtualDOM = oldComponent.render()

    nextVirtualDOM.component = oldComponent
    diff(nextVirtualDOM, container, oldDOM)

    oldComponent.componentWillUpdate(prevProps)
  }


}