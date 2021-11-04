import React, { render, Component } from './react'

const root = document.getElementById('root')

const jsx = (
  <div>
    <p>Hello React</p>
    <p>Hello Fiber</p>
  </div>
)

class Greating extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '张三'
    }
  }

  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={ () => { this.setState({name: '里斯'}) }}>button</button>
      </div>
    )
  }
}

function FnComponent(props) {
  return <div>{props.title}FnComponent</div>
}

// render(jsx, root)

// setTimeout( () => {
//   const jsx = (
//     <div>
//       <p>Hello Fiber</p>
//     </div>
//   )
//   render(jsx, root)
// }, 2000)
render(<Greating title='hello' />, root)
// render(<FnComponent title='hello' />, root)