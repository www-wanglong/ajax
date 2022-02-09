import TinyReact from './TinyReact'

const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <button onClick={() => alert("你好！！！")}>点击我</button>
    2, 3
    <input type="text" value="13" />
  </div>
)


const root = document.getElementById('root')
// TinyReact.render(virtualDOM, root)
// setTimeout(() => {
//   TinyReact.render(modifyDOM, root)
// }, 2000)
// TinyReact.render(virtualDOM, root)
class Alert extends TinyReact.Component {

  constructor (props) {
    super(props)
    this.state = {
      title: 'default title'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', nextProps)
  }

  componentWillUpdate (nextProps) {
    console.log('componentWillUpdate', nextProps)
  }

  componentDidUpdate (prevProps) {
    console.log('componentDidUpdate', prevProps)
  }

  handleClick () {
    this.setState({
      title: 'changed title'
    })
  }

  render () {
    const { name, age } = this.props
    console.log(this.state)
    return (
      <div>
        Hello React{name}, {age}
        <div>{this.state.title}</div>
        <button onClick={this.handleClick}>Change</button>
      </div>
    )
  }
}

function Heart (props) {
  return (
    <div>
      &hearts;
      {props.title}
    </div>
  )
}

class DemoRef extends TinyReact.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log(this.input.value)
  }

  render () {
    return (
      <div>
        <input type="text" ref={input => (this.input = input)} />
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}

class DemoKey extends TinyReact.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      persons: [
        {
          id: 1,
          name: '张'
        },
        {
          id: 2,
          name: 'li'
        },
        {
          id: 3,
          name: 'wu'
        },
        {
          id: 4,
          name: 'cheng'
        }
      ]
    }
  }

  handleClick () {
    const newState = JSON.parse(JSON.stringify(this.state))
    newState.persons.pop()

    this.setState(newState)
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.state.persons.map((person) => (
              <li key={person.id}>{person.name}</li>
            ))
          }
        </ul>
        <button onClick={this.handleClick}>button</button>
      </div>
    )
  }
}

TinyReact.render(<DemoKey />, root)

// setTimeout(() => {
//   TinyReact.render(<Alert name="李四" age="20" />, root)
// }, 2000)

// setTimeout(() => {
//   TinyReact.render(<Heart title="李四" />, root)
// }, 2000)