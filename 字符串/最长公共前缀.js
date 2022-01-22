/**
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀
 * 如果不存在公共前缀，返回空字符串 ""
 * 示例
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 */


/**
 * 方法一 递归迭代
 * 思路：查找n个字符串的最长公共前缀，可以拆分为两步：1 查找前 n-1个字符串的最长公共前缀m，2 查找m和最后一个字符串的公共前缀
 */

const func1 = function (strs) {
  // 递归函数
  function findCommonPrefix(a,b) {
    let i = 0;
    // 循环比较传入的两个字符串前缀是否相等
    while(i < a.length && i < b.length && a.charAt(i) === b.charAt(i)) {
      i++
    }
    // 将相等部分截取出来
    return i > 0 ? a.substring(0, i) : ''
  }
  if (strs.length > 0) {
    // 将数组中第一个字符串作为第一次的公共前缀
    let commonPrefix = strs[0]
    // 循环比较数组中的字符串
    for (let i = 1; i < strs.length; i++) {
      // 递归比较数组里每个字符串
      commonPrefix = findCommonPrefix(commonPrefix, strs[i])
    }
    return commonPrefix
  }
  return ''
}

/**
 * 方法二 循环迭代
 * 思路：最长公共前缀一定是数组中所有数组都包含的前缀子串，我们可以将任意字符串的前缀最为公共前缀，
 * 从长度0到n(n为改字符串长度)，横向扫描数组中的所有字符串，看是否都有该前缀，知道找不到满足的为止
 */

const func2 = function(strs) {
  if (strs.length === 0) return ""
  let i = 0;
  let flag = true
  while(flag) {
    // 只有当数组中第一项字符串的长度 大于 i 时
    if (strs[0].length > i) {
      // 取出当前循环出的最大公共前缀字符
      const char = strs[0].charAt(i)
      // 循环整个需要比较的数组
      for (let j = 1; j < strs.length; j++) {
        // 如果当前循环的字符不在最长公共前缀中，我们就跳出并结束循环，并用这个长度 i 来截取出最长公共前缀
        if (strs[j].length <= i || strs[j].charAt(i) !== char) {
          flag = false
          break
        }
      }
    } else {
      flag = false
    }
    i++
  }
  return strs[0].substring(0, i - 1);
}