
// 例：pwwkew
// 答案： wke 3
/**
 * 滑动窗口
 * 存储数据
 *
 * 先遍历外部循环，i为窗口左边的边界，right为右边的边界；
 * 内部while从右边界开始，慢慢向右移动（set没有下个元素切且在字符串的长度内），
 *   当不满足while条件的时候，right刚好停留在不满足条件的元素位置，
 * 开始移动左边的位置，每次进入，就删除set中前一个元素，直到刚好删除right停留位置的元素，又进入while
 *   如此反复，就会找到最大的
 */
function lengthOfLongestSubString1(s) {
  const occ = new Set()
  const n = s.length
  // 右指针 初始值为-1
  let right = -1, ans = 0
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      occ.delete(s.charAt(i - 1))
    }
    // {p w }
    while (right + 1 < n && !occ.has(s.charAt(right + 1))) {
      occ.add(s.charAt(right + 1))
      right++
    }
    ans = Math.max(ans, right - i + 1)
  }
  return ans
}

console.log(lengthOfLongestSubString1('acbcabch'))

// class Solution {
//   public int lengthOfLongestSubstring(String s) {
//       if (s.length()==0) return 0;
//       HashMap<Character, Integer> map = new HashMap<Character, Integer>();
//       int max = 0;
//       int left = 0;
//       for(int i = 0; i < s.length(); i ++){
//           if(map.containsKey(s.charAt(i))){
//               left = Math.max(left,map.get(s.charAt(i)) + 1);
//           }
//           map.put(s.charAt(i),i);
//           max = Math.max(max,i-left+1);
//       }
//       return max;

//   }
// }

function lengthOfLongestSubString1(s) {
  let length = s.length
  if (length === 0) {
    return 0
  }
  const stringMap = new Map()
  let max = 0
  let left = 0
  for (let i = 0; i < length; i++) {
    let value = s.charAt(i)
    if (stringMap.has(value)) {
      left = Math.max(left, stringMap.get(value) + 1)
    }
    stringMap.set(value, i)
    max = Math.max(max, i - left + 1)
  }
  return max
}

console.log(lengthOfLongestSubString('acbcabch'))