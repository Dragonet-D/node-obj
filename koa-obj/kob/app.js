function compose(middleWares) {
  return function() {
    return dispatch() {
      
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
    }, 2000)
  })
}

const middleWares = [fn1, fn2, fn3];
