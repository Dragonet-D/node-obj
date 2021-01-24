function interview(callback) {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      callback(null, 'success')
    } else {
      // throw new Error('fail')
      callback(new Error('fail'))
    }
  }, 400)
}
// interview 函数执行栈和内部的, setTImeout函数的执行栈是两个执行栈, throw new Error只会抛错到全局, 并不能在interview里面被捕获到

try {
  interview()
} catch (e) {

}