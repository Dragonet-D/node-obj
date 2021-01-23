// const playerAction = process.argv[process.argv.length - 1]

const game = require('./lib')

let count = 0

process.stdin.on('data', e => {
  const playerAction = e.toString().trim()
  const res = game(playerAction)
  if (res === -1) {
    count++
  }

  if (count ===3) {
    console.log('你太厉害了, 我不玩了');
    count = 0
    process.exit()
  }
})
