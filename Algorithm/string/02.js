// 替换空格
// 将字符串中的每个空格替换成'%20'
}
function replaceSpace(str) {
  return str.replace(/\s+/g, '%20')
  //return str.split(' ').join('%20')
}