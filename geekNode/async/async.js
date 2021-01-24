console.log(async function () {
  return 4
}())

console.log(function () {
  return new Promise(resolve => {
    resolve(4)
  })
}())

(function () {
  const res = async function() {
    // 加了await只有会等后面的Promise返回数据之后才能继续执行
    const content = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(11)
      }, 500)
    })

    console.log(content)
    return 1112
  }()

  setTimeout(() => {
    console.log(res)
  }, 800)
})()

/*

try {
} catch(e) {
}只能捕获到当前调用栈的错误

* */
  (function () {
    const res = async function() {
      try {
        const content = await new Promise(((resolve, reject) => {
          setTimeout(() => {
            reject(new Error('error'))
          }, 500)
        }))
      } catch (e) {
        console.log(e.message);
      }

      console.log(content)
      return 111
    }()

    setTimeout(() => {
      console.log(res);
    }, 800)
  })()

/*

1. async function 是 Promise的语法糖封装
2. 异步编程的终极方案 - 以同步方式写异步
  await 关键字可以"暂停"asyncFunction的执行
  await关键字可以以同步的写法获取Promise的执行结果
  try-catch可以获取await所得到的错误

* */

(async function () {
  await interview()

  try {
    await Promise.all([interview(1), interview(2), interview(3)])
  } catch (e) {
    return console.log(`cry as ${e.round}`)
  }
})()