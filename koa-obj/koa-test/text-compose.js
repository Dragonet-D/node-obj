function compose(mids) {
  return mids.reduce((leftFn, rightFn) => (...args) => {
    rightFn(leftFn(...args));
  });
}

const add = (x, y) => {
  return x + y;
};

const square = z => {
  return z * z;
};

const double = x => {
  return x * 2;
};

const middleWares = [add, square, double];
const retFn = compose(middleWares);

console.log(retFn(1, 2));
