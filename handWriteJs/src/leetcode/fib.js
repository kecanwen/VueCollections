// !实现 斐波那契数  要求复杂度 O(n)
// * 动态规划里面最关键的特征就是 重叠子问题
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  let fib = [0,1];
  for(let i = 2; i <= n; i++ ){
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib[n];
}