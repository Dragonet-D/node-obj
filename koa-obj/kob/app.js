function compose(middleWares) {
  return function() {
    return dispatch(0);
    function dispatch(i) {
      const fn = middleWares[i];
      if (!fn) {
        return Promise.resolve();
      }
      return Promise.resolve(
        fn(function next() {
          return dispatch(i + 1)
        })
      )
    }
  }
}

async function fn1(next) {
  console.log('fn1');
  await next();
  console.log('end fn1');
}

async function fn2(next) {
  console.log('fn2');
  await delay();
  await next();
  console.log('end fn2');
}

async function fn3() {
  console.log('fn3');
}

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('delay');
      resolve()
    }, 2000)
  })
}

const middleWares = [fn1, fn2, fn3];
const finalFn = compose(middleWares);
finalFn();
