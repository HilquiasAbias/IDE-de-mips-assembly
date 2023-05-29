function createQueue() {
  // Create an array in closure. This is a private variable.
  const queue = []

  // This could have been a private method, if we didn't also want to expose it
  // Notice how simple this is to understand. No need for `this`
  const isEmpty = () => queue.length === 0

  return {
    enqueue(x) {
      queue.push(x)
    },
    dequeue() {
      return queue.shift()
    },
    peek() {
      if (isEmpty()) return undefined
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty,
  }
}

const queue1 = createQueue()

queue1.enqueue(5)
queue1.enqueue(15)

console.log(queue1.length);