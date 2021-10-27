export default {
  debug: true,
  state: {
    user: {
      name: 'loong',
      age: 18
    }
  },
  setUserNameAction (name) {
    if (this.debug) {
      console.log('setUserNameAction triggered：', name)
    }
    this.state.user.name = name
  }
}