// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.data = new Stack();
  }

  add(input) {
    const newS = new Stack();
    let isItemLeftinSecondStack = true;
    while (isItemLeftinSecondStack) {
      const topEle = this.data.pop();
      if (topEle) newS.push(topEle);

      if (!topEle) isItemLeftinSecondStack = false;
    }

    newS.push(input);

    let isItemLeftInFirstStack = true;
    while (isItemLeftInFirstStack) {
      const topEle = newS.pop();
      if (topEle) this.data.push(topEle);

      if (!topEle) isItemLeftInFirstStack = false;
    }
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data.peek();
  }
}

// const one = new Queue();

// one.add("1");
// one.add("2");
// one.add("3");
// one.remove();

// console.log(one.data, one.peek());

module.exports = Queue;
