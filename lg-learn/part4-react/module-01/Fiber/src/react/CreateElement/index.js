export default function createElement(type, props, ...children) {
  const childElements = [].concat(...children).reduce( (result, child) => {
    if (child !== false && child !== true && child !== null) {
      if (child instanceof Object) {
        result.push(child)
      } else {
        // 处理文本内容
        result.push(createElement('text', {textContent: child}))
      }
    }
    return result

  }, [])
  return {
    type,
    props: Object.assign({children: childElements}, props),
  }
}