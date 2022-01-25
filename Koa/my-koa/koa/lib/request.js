const request = {
  get method () {
    return this.req.method
  },

  get header () {
    return this.req.header
  }
}

module.exports = request