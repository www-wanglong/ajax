function doSomething (part, chapter) {
  const parts = ['ES6', 'Node', 'Vue']
  if (part) {
    if (parts.includes(part)) {
      console.log('属于当前课程')
      if (chapter > 5) {
        console.log('need vip')
      }
    }
  } else {
    console.log('确认模块信息')
  }
}



function doSomething (part, chapter) {
  const parts = ['ES6', 'Node', 'Vue']
  if (!part) {
    console.log('确认模块信息')
    return
  }
  if (!parts.includes(part)) {
    return
  }
  console.log('属于当前课程')
  if (chapter > 5) {
    console.log('need vip')
  }
}
doSomething('Vue', 3)
doSomething2('Vue', 3)