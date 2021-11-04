import React, { Component } from "react";
import App from './App'

export default class ErrorBoundaries extends Component {
  constructor () {
    super()

    this.state = {
      hasError: false
    }
  }

  componentDisCatch(error) {
    console.log('发生了错误')
    console.log(error)
  }

  static getDerivedStateFromError() {
    console.log('getDerivedStateFromError')
    return {
      hasError: true
    }
  }

  render () {
    if (this.state.hasError) {
      return <div>error</div>
    }
    return <App />
  }
};