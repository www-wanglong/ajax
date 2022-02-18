function compareVersion1 (version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')
  for (let i = 0; i < v1.length || i < v2.length; i++) {
    let x = 0, y = 0
    if (i < v1.length) {
      x = parseInt(v1[i])
    }
    if (i < v2.length) {
      y = parseInt(v2[i])
    }

    if (x > y) {
      return 1
    }

    if (x < y) {
      return -1
    }
  }
  return 0
}

function compareVersion (version1, version2) {
  let length1 = version1.length
  let length2 = version2.length
  let i = 0
  let j = 0

  while (i < length1 || j < length2) {
    let x = 0
    let y = 0
    for (; i < length1 && version1[i] !== '.'; i++) {
      x = x * 10 + version1[i] * 1
    }
    i++
    for (; j < length2 && version2[j] !== '.'; j++) {
      y = y * 10 + version2[j] * 1
    }
    j++
    console.log('x', x, 'y', y)
    if (x !== y) {
      return x > y ? 1 : -1
    }

  }

  return 0

}

console.log(compareVersion1('12.1.4', '0.1'))
console.log(compareVersion('12.1.4', '0.1'))

