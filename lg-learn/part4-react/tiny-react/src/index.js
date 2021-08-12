import TinyReact from './TinyReact'
const root = document.getElementById('root')

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
    <span>这是一update段内容</span>
    <button onClick={() => alert("你好!!!!!")}>点击我</button>
    <h6>这个将会被删除</h6>
    <input type="text" value="13" />
  </div>
)

class List extends TinyReact.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          id: 1,
          name: '张三'
        },
        {
          id: 2,
          name: '李四'
        },
        {
          id: 3,
          name: '王五'
        },
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const newState = JSON.parse(JSON.stringify(this.state))
    //newState.persons.push(newState.persons.shift())
    //newState.persons.splice(1, 0, { id: 100, name: 'long' })
    newState.persons.pop()
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <ul>
          { this.state.persons.map( person => <li key={person.id}>{person.name}      <DemoRef /></li>) }

        </ul>

        <button onClick={this.handleClick}>button</button>
      </div>
    )
  }
}

// TinyReact.render(virtualDOM, root)

// setTimeout(() => {
//   TinyReact.render(modifyDOM, root)
// }, 2000)

console.log(virtualDOM)
function Dome () {
  return <div>&hearts;</div>
}
function Heart (props) {
  return (
    <div>
      &hearts;
      {props.title}
      <Dome />
    </div>
  )
}

// TinyReact.render(<Heart title="hello" />, root)

class Alert extends TinyReact.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'default title'
    }

    this.handleClick = this.handleClick.bind(this)


  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  handleClick() {
    this.setState({
      title: 'Change Title'
    })
  }

  render() {
    return (
      <div>
        hello {this.props.name}, age: {this.props.age}
        <div>{this.state.title}
          <button onClick={this.handleClick}>改变状态</button>
        </div>
      </div>
    )
  }
}

// TinyReact.render(<Alert name="zhang" age={20} />, root)

// setTimeout(() => {
//   TinyReact.render(
//     <Alert name="lisi" age={50} />, root
//     //<Heart title="hello" />, root
//   )
// }, 2000)

class DemoRef extends TinyReact.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this.alert)
  }

  componentDidMount() {
    console.log('componentDidMount1')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>
        <input type="text" ref={ input => this.input = input} />
        <button onClick={this.handleClick}>button</button>
        <Alert ref={ alert => this.alert = alert } name="long" age={12} />
      </div>
    )
  }

}

TinyReact.render(<List/>, root)
