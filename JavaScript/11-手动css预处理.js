//1. 用空格和换行代替花括号、冒号和分号
//2. 支持选择器的嵌套组合
//3. 支持以$符号开头的变量定义和使用

// div {
//   color: 'red'
// }
// div p {
//   border: 1px solid lightgreen
// }

// div .a-b {
//   background-color: lightgreen
// }

// div .a-b[data] {
//   padding: 15px;
//   font-size: 12px;
// }

// .d-ib {
//   dispaly: inline-block;
//

// 使用这样的样式编写方式
// $ib inline-block
// $borderColor lightgreen
// div
//   p
//     border 1px solid $borderColor
//   color darkkhaki

//   .a-b
//     background-color lightyellow
//     [data]
//       padding 15px
//       font-size 12px
// .d-ib
//   display $ib


//编译器： 对预处理器将一种语言转换成另一种语言的程序；
//        工作流程：解析、转换、代码生成

// 解析（词法分析和语法分析）
//     词法分析：就是将源代码转换成令牌
//     语法分析：将之前生成的令牌转换成一种带有另配关系描述的抽象表示。抽象语法树（AST）
// 转化
//    把AST拿过来做一些修改
// 代码生成

// 1. 词法分析：源码分为变量、变量值、选择器、属性、属性值
// 确定令牌的结构
{
  type: "variableDef" | "variableRef" | "selector" | "property" | "value" //
  value: string //
  indent: number // 缩进空格数，需要根据它判断从属关系
}
// 然后确定各个类型令牌的判断条件
// variableDef: 以"$"开头前面无空字符串
// variableRef: 以"$"开头前面有非空字符串
// selector: 独占一行
// property: 以字母开头
// value: 非改行行的第一个字符串
function tokenize(text) {
  return text.trim().split(/\n|\r\n/).reduce( (tokens, line, idx) => {
    const spaces = line.match(/^\s+/) || ['']
    const indent = spaces[0].length // 缩进
    const input = line.trim()
    const words = input.split(/\s/)
    let value = words.shift()
    if (words.length == 0) {
      tokens.push({
        type: 'selector',
        value,
        indent
      })
    } else {
      let type = ''
      if (/^\$/.test(value)) {
        type = 'variableDef'
      } else if (/^[a-zA-z-]+$/.test(value)) {
        type = 'property'
      } else {
        throw new Error(`Tokenize error:Line${idx} "${value}" is not a vairable or property`)
      }
      tokens.push({
                type,
                value,
                indent
              })
      while(value = words.shift()) {
        tokens.push({
          type: /^\$/.test(value) ? 'variableRef' : 'value',
          value,
          indent: 0
        })
      }

    }
    return tokens
  }, [])
}

// 2. 语法分析（可以通过children和rules来描述这两类的层级关系）
s = {
  type: 'root',
  children: [{
    type: 'selector',
    value: string,
    rules: [{
      property: string,
      value: string
    }]
  }],
  indent: number,
  children: []
}

function parse(tokens) {
  var ast = {
    type: 'root',
    children: [],
    indent: -1
  }
  let path = [ast]
  let preNode = ast
  let preNode
  let vDict = {}
  while (node = tokens.shift()) {
    if (node.type === 'variableDef') {
      if (tokens[0] && tokens[0].type === 'value') {
        const vNode = tokens.shift()
        vDict[node.value] = vNode.value
      } else {
        preNode.rules[preNode.rules.length - 1].value = vDict[node.value]
      }
      continue
    }
    if (node.type === 'property') {
      if (node.indent > preNode.indent) {

      } else {

      }
    }

    if (node.type === 'value') {

    }
  }
}
