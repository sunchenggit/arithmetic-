/**
 * 实现strStr
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 -1。
 * 以下称 haystack 字符串为匹配字符串，needle 字符串为查找字符串
 * 
 * 示例
 * 给定 haystack = 'hello world', needle = 'll'
 * 返回2
 */

/**
 * 方法一 遍历截取字符串对比
 * 思路：截取字符串对比的思路很简单，从匹配字符串 haystack 中截取出与需要查找字符串 needle 长度相等的内容后，比比截取的内容与匹配字符串是否相等，如果相等返回开始截取的下标
 */

const func1 = function (haystack, needle) {
  const hayLen = haystack.length
  const nedLen = needle.length

  if (!needle) {
    return 0
  }
  if (nedLen > hayLen) {
    return -1
  } else if (nedLen === hayLen) {
    return haystack === needle ? 0 : -1
  } else {
    for (let index = 0; index <= hayLen - nedLen; index++) {
      if (haystack[index] !== needle[0]) {
        continue
      }
      if (haystack.substring(index, index + nedLen) === needle) {
        return index
      }
    }
  }
  return -1
}

/**
 * 方法二 双层循环对比字符
 * 思路：循环对比字符串思路也很简单，从匹配字符串haystack的不同位置开始遍历，判断其中是否含有查找字符串needle
 * 如： haystack为hello， needle为 ll ，一次判断 he,el,ll,lo,是否完全和ll相等，相等即返回对应字符串在 haystack中的下标
 */

const func2 = function (haystack, needle) {
  const hayLen = haystack.length
  const nedLen = needle.length

  if (!needle) {
    return 0
  }
  if (nedLen > hayLen) {
    return -1
  } else if (nedLen === hayLen) {
    return haystack === needle ? 0 : -1
  } else {
    for (let i = 0; i < hayLen - nedLen; i++) {
      // 第一个和最后一个是否和查找字符串的第一个和最后一个相等
      if (haystack[i] === needle[0] && haystack[i + nedLen - 1] === needle[nedLen - 1]) {
        // 如果查找字符串的长度为1，那么在上面的条件下肯定是符合的，所以就返回当前的索引
        if (nedLen === 1) {
          return i
        }
        // 如果个数大于1那么还是要继续循环查找字符串进行后面字符的匹配
        for (let j = 1; j < nedLen; j++) {
          // 如果下一个字符不匹配就直接跳出循环
          if (haystack[i+j] !== needle[j]) {
            break
          }
          // 直到循环结束，我们直接返回第一次循环的索引
          if (j === nedLen - 1) {
            return i
          }
        }
      }
    }
  }
  return -1
}