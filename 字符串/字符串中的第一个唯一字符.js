/**
 * 字符串中的第一个唯一字符
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1
 * 示例
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 */

/**
 * 方法一 库函数
 * 思路：如果某个字符串第一次出现的位置和最后一次出现的位置相同，就说明这个字符只出现了一次
 */

const func1 = s => {
  // i+=1 和 i++ 效果一样
  for (let i = 0; i < s.length; i+=1) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}


/**
 * 方法二 哈希
 * 思路
 * 遍历两次，第一次遍历，用一个哈希对象记录所有字符串的出现次数，第二次遍历，找出哈希对象中只出现一次的字符下标
 */

const func2 = s => {
  const hash ={}
  // 第一次遍历，计算每次出现的字符次数
  for (let i = 0; i < s.length; i+=1) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1
    } else {
      hash[s[i]] += 1
    }
  }
  // 第二次遍历，找出哈希对象中只出现一次的字符下标
  for (let i = 0; i < s.length; i+=1) {
    if (hash[s[i]] === 1) {
      return i
    }
  }
  return -1
}