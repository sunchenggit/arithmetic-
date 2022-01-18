/**
 * 反转字符串
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用  的额外空间解决这一问题。
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 示例1
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 * 
 * 示例2
 * 输入：["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 * 
 */

/**
 * 方法一 首位替换
 * 思路：首尾替换法，逐位遍历，进行交换
 */

const func1 = s => {
  // 循环次数是传入值得长度一半
  for (let i = 0; i < s.length / 2; i++) {
    // 利用结构赋值进行变量的交换，替换字符串的第i位和倒数第i位
    [s[i], [s.length - 1 - i]] = [s.length - 1 - i, s[i]]
  }
  return s
}


/**
 * 方法二 中间变量首尾替换法
 * 思路： 中间变量首尾替换法，逐位遍历，进行交换
 */

const func2 = s => {
  // 注意只能循环一半的字符数量，如果全部循环就相当于没有循环
  for (let i = 0; i < s.length / 2; i++) {
    const a = s[i]
    s[i] = s[s.length - 1 - i]
    s[s.length - 1 - i] = a
  }
}