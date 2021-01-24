const eventloop = {
  queue: [],
  loop() {
    while (this.queue.length) {
      const res = this.queue.shift()
      res()
    }
    setTimeout(this.loop.bind(this), 50)
  },
  add(callback) {
    this.queue.push(callback)
  }
}

eventloop.loop()

setTimeout(() => {
  eventloop.add(() => {
    console.log(1);
  })
}, 500)

setTimeout(() => {
  eventloop.add(() => {
    console.log(2);
  })
}, 800)
