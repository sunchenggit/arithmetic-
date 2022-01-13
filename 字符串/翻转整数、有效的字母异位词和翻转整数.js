/*
*   翻转整数
    给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
    示例
    示例 1:
    输入: 123
    输出: 321

    示例 2:
    输入: -123
    输出: -321

    示例 3:
    输入: 120
    输出: 21
*/

// 方法一：翻转字符串方法
// 思路：如果将数字看成是有符号为的字符串，那么我们就能够通过使用JS提供的字符串方法来实现非符号部分的翻转，又因为整数的翻转并不影响符号，所以最后在补上符号。完成算法

const func1 = (x) => {
  // 非空判断
  if (typeof x !== 'number') {
    return
  }

  // 设置值范围 负2的31次方 到 2的31次方减一
  const MAX = 2147483647
  const MIN = -2147483648

  // 识别数字部分并翻转
  const rest =
   x > 0
    ? String(x).split('').reverse().join('')
    : String(x).slice(1).split('').reverse().join('')

  // 转换为正常值，区分正负数
  const result = x > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10)
  
  // 处理边界情况
  if (result >= MIN && result <= MAX) {
    return result
  }
  return 0
}


// 方法二： 类似欧几里得算法
// 我们借鉴欧几里得求最大公约数的方法来解题，符号的处理和方法一相同，这里我们通过模10取到最低位，然后再通过乘10将最低位迭代到最高位，完成翻转

const func2 = (x) => {
  // 获取传入值得绝对值
  let int = Math.abs(x)

  // 设置值范围 负2的31次方 到 2的31次方减一
  const MAX = 2147483647
  const MIN = -2147483648
  let num = 0

  // 遍历循环每一位数字
  while(int !== 0) {
    // 借鉴欧几里得算法，从 num 的最后一位开始取值拼成新的数
    num = (int % 10) + (num * 10)
    // 剔除掉被消费的部分
    int = Math.floor(int / 10)
  }
  // 异常值
  if (num >= MAX && num <= MIN) {
    return 0
  }
  if (x < 0) {
    return num * -1
  }
  return num
}