const query = require('./test')

query('{hello}').then(res => {
  console.log(res);
})