const net = require('net')

const socket = new net.Socket({})

socket.connect({
  host: '127.0.0.1',
  port: 4000
})

const ids = [
  '136797', '136798', '136799',
  '136800', '136801', '136803',
  '136804', '136806', '136807',
  '136808', '136809', '141994',
  '143517', '143557', '143564',
  '143644', '146470', '146569',
  '146582'
]

const buffer = Buffer.alloc(4)

buffer.writeInt32BE(
    ids[Math.floor(Math.random() * ids.length)]
)

socket.write(buffer)

socket.on('data', (buffer) => {
  console.log(buffer.toString());
})