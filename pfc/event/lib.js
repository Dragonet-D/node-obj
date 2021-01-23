const EventEmitter = require('events').EventEmitter

class GeekTime extends EventEmitter {
  constructor() {
    super();

    setInterval(() => {
      this.emit('new lesson', {
        price: Math.random() * 100
      })
    }, 3000)
  }
}

const geekTime = new GeekTime

module.exports = geekTime