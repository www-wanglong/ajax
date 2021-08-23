export default store => next => action => {
  console.log('test middleware run')
  next(action)
}