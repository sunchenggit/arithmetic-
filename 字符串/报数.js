/**
 * 报数
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 1.     1             读作 "one 1" ("一个一")
 * 2.     11            读作 "two 1s" ("两个一"）
 * 3.     21            读作 "one 2", "one 1" （"一个二" , "一个一")
 * 4.     1211
 * 5.     111221
 */

/**
 * 方法一 递归
 * 想要获取第 n 项的结果，需要先获取到第 n-1 项的结果，然后报出第 n-1 项的结果做为第 n 项的结果。所以可以采用递归调用法。
 */

const func1 = n => {
  if (n === 1) return '1'
  // 获取第 n - 1 项的结果
  const preResult = func1(n - 1)
  /**
   * \d 匹配一个数字
   * \1 匹配前面第一个括号内匹配到的内容
   * (\d)\1* 匹配相邻数字相同的内容
   * 使用 replace 方法将匹配到的内容处理为长度 + 内容的第一个字符
   * 结果为所求报数
   */
  return preResult.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
}

/**
 * 方法二 循环法
 * 递归法是由 n 到 1 计算相应的值并层层返回的，循环法正好相反，循环法由 1 计算到 n。然后将最终值返回。
 */

const func2 = n=> {
  let result = '1'
  for (let i = 1; i < n; i++) {
    // 通过循环知道第 n 项
    result = result.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  return result
}