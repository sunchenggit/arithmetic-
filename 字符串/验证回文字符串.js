/**
 * 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 示例 2:
 * 输入: "race a car"
 * 输出: false
 */

const func1 = s => {
  // 1. 将出入的字符串，统一转换为小写后，利用正则排除不是字母和数字的，在转换为数组
  const arr = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('')
  let i = 0
  let j = arr.length - 1
  // 循环比较元素
  while(i < j) {
    // 从首尾开始一一比较元素是否相等
    if (arr[i] === arr[j]) {
      // 若相等，即第二个元素和倒数第二个元素继续比价，以此类推
      i = i + 1
      j = j - 1
    } else {
      // 只要有一个相对位置上不相等，即不是回文串
      return false
    }
  }
  // 是回文字符串
  return true
}

/**
 * 方法二
 * 思路：首先，去除字符串中的非字母和数字，然后，利用数组将字符串翻转，在和原字符串进行比较
 */

const func2 = s => {
  // 1. 方便比较，统一转换成小写，剔除其中非字母和数字
  const str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
  // 2. 将字符串转换为数组，然后翻转，在拼接成新的字符串
  const newStr = str.split('').reverse().join('')
  // 对比两个字符串得到最后结果
  return str === newStr
}