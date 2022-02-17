// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

function isValid (str) {
  const len = str.length
  if (len % 2 === 1) {
    return false
  }
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ])
  const stack = []
  for (let value of str ) {
    if (map.has(value) && map.get(value) === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(value)
    }
  }

  return stack.length === 0
}

console.log(isValid('(){}[]'))
console.log(isValid('(){}[}'))
console.log(isValid('{()}'))