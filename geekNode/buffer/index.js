const buf1 = Buffer.from('aaa')
const buf2 = Buffer.from([1,2,3,4])

const buf3 = Buffer.alloc(20)

console.log(buf1);
console.log(buf2);
console.log(buf3);

buf2.writeInt8(12, 1)
console.log(buf2);

const fs = require('fs')
const protobuf = require('protocol-buffers')

const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'))

const buf4 = schema.Column.encode({
  id: 1,
  name: '2',
  price: 12.2
})

console.log(schema.Column.decode(buf4))

