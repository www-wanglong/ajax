export const forEach = (array, fn) => {
  for ( let i = 0; i < array.length; i++) {
    fn(array[i])
  }
}

export const some = (array, fn) => {
  let result = true
  for (const value of array) {
    result = result || fn(value)
    if (result) {
      break
    }
  }
  return result
}