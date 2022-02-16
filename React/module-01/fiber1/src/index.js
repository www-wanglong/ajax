import React, { render, Component } from './react'

const root = document.getElementById('root')

const jsx  = (
  <div>
    <p>Hello React</p>
    <p>fiber</p>
  </div>
)

const jsx1  = (
  <div>
    <div>Hello React1</div>

  </div>
)

render(jsx, root)

// setTimeout(() => {
//   render(jsx1, root)
// }, 2000)

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '张'
    }
  }

  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={() => this.setState({name: '历史'})}>change</button>
      </div>
    )
  }
}

function FnComponent(props) {
  return <div>{props.title}FnComponent</div>
}

// render(<Greeting />, root)