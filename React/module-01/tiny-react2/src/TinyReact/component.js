import diff from "./diff"

export default class Component {

  constructor (props) {
    this.props = props
  }

  setState (state) {
    this.state = Object.assign({}, this.state, state)
    // 回去新的Virtual DOM对象
    let virtualDOM = this.render()
    // 获取旧的Virtual DOM对象
    let oldDOM = this.getDOM()
    diff(virtualDOM, oldDOM.parentNode, oldDOM)
  }

  setDOM (dom) {
    this._dom = dom
  }

  getDOM () {
    return this._dom
  }

  updateProps (props) {
    this.props = props
  }

  // 生命周期函数
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, preState) {}
  componentWillUnmount() {}


}