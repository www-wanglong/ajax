// 数组的排序方法

// 冒泡排序
function sort1(arr1) {
  let arr = arr1
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let num = arr[j]
      if (num < arr[j+1]) {
        arr[j] = arr[j+1]
        arr[j+1] = num
      }
    }
  }
  return arr
}


// 选择排序
function sort2(arr1) {
  let arr = arr1
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let num = arr[i]
        arr[i] = arr[j]
        arr[j] = num
      }
    }
  }
  return arr
}
// console.log(sort2([2,3,1,7,4]))

// 插入排序
function sort(arr1) {
  let arr = arr1
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        let num = arr[i]
        arr[i] = arr[j]
        arr[j] = num
      }
    }
  }
  return arr
}

console.log(sort([2,3,1,3,6]))