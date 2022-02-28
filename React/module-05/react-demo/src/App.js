import React from 'react';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }


  componentDidMount() {
    this.setState((preState) => ({
      index: preState.index + 1
    }), () => {
      console.log(this.state.index)
    })

    this.setState((preState) => ({
      index: preState.index + 1
    }), () => {
      console.log(this.state.index)
    })
  }

  render() {
    return (
      <div>
        paranet
      </div>
    )
  }
}

class SetState1 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentDidMount() {
    console.log('SetState1调用setState')
    this.setState({
      index: this.state.index + 1
    })
    console.log('state', this.state.index)
    console.log('SetState调用setState');
    this.setState({
      index: this.state.index + 1
    })
    console.log('state', this.state.index);

  }

  render() {
    return (
      <div>
          SetState1
      </div>
    )
  }
}




export default App;
