/**
 * atoi (表示 ascii to integer)是把字符串转换成整型数的一个函数，实现一个 atoi 函数，使其能将字符串转换成整数。
 */

/**
 * 方法一：正则匹配
 * 思路
 * 第一步，用正则提取满足条件的字符，(-|\+)? 表示第一位是-或则+或则都不是, \d+ 表示匹配多个数字
 * 第二步，判断目标是否超过 int 最大值或最小值
 */

const func1 = (str) => {
  // 通过正则获取所需的字符
  const result = str.trim().match(/^(-|\+)?\d+/g)
  return result
    ? Math.max(Math.min(result[0], Math.pow(2, 31) - 1), -Math.pow(2, 31))
    : 0
}

/**
 * 逐个判断
 * parseInt(string, radix)   解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。从给定的字符串中解析出的一个整数。
 */

const func2 = (str) => {
  const news = str.trim()
  if (parseInt(news)) {
    return returnNum(parseInt(news))
  } else {
    return 0
  }
}

const returnNum = (num) => {
  if (num >= -Math.pow(2, 31) && num <= Math.pow(2, 31) -1) {
    return num
  } else {
    return num > 0 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31)
  }
}