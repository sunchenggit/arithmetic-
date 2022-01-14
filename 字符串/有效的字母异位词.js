/**
 * 有效的字母异位词(字母相同但是组成不同的单词)
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 */

/**
 * 方法一：利用数组的sort()方法
 * 思路：首先对字符串字母进行排序，然后比较两个字符串是否相等
 */

const func1 = (s, t) => {
  // 字符串转数组
  const sArr = s.split('')
  const tArr = t.split('')
  // 数组 sort 排序方法，根据字符串的 UTF-16 代码单元 排序
  // charCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元
  const sortFn = (a, b) => a.charCodeAt() - b.charCodeAt()
  sArr.sort(sortFn)
  tArr.sort(sortFn)
  // 比较排序后的字符是否相等
  return sArr.join('') === tArr.join('')
}

/**
 * 方法二：计数累加方法
 * 思路： 声明一个对象记录字符串中每个字母的个数，另外一个字符串没想与得到的对象做匹配，最后根据计数判断是否相等
 */

const func2 = (s, t) => {
  if (s.length !== t.length) return false;

  const hash = {}
  for (const k of s) {
    hash[k] = hash[k] || 0
    hash[k] += 1
  }
  for (const k of t) {
    // 如果t字符串中的字母不在 hash 对象中，直接返回错误
    if (!hash[k]) return false
    // 有的话每次减去一个计数
    hash[k] -= 1
  }
  return true
}