// promise 没有捕获错误的话会被抛到全局
new Promise((resolve, reject) => {
  reject(new Error('fail'))
})

// promise 状态机