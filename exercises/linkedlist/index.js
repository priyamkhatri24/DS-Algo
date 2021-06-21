// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let isNextNull = false;
    let newNode;
    let counter = 0;
    if (this.head) {
      newNode = this.head.next;
      counter = 1;
    }
    while (!isNextNull) {
      if (newNode) {
        counter++;
        newNode = newNode.next;
      } else {
        isNextNull = true;
      }
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let newNode;
    let isNextNull = false;
    if (this.head) {
      newNode = this.head;
    }
    while (!isNextNull) {
      if (newNode.next) {
        newNode = newNode.next;
      } else {
        isNextNull = true;
      }
    }

    return newNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let newNode = this.head;
    if (!this.head) return;
    let isNextNull = false;
    while (!isNextNull) {
      if (newNode.next) {
        if (!newNode.next.next) {
          newNode.next = null;
          isNextNull = true;
        } else {
          newNode = newNode.next;
        }
      } else {
        isNextNull = true;
        this.head = null;
      }
    }
  }

  insertLast(input) {
    let newNode = this.head;
    if (!this.head) {
      this.head = new Node(input);
      return;
    }
    let isNextNull = false;
    while (!isNextNull) {
      if (newNode.next) {
        newNode = newNode.next;
      } else {
        isNextNull = true;
      }
    }
    newNode.next = new Node(input);
  }

  getAt(index) {
    let newNode = this.head;
    if (!newNode) return null;
    let counter = 0;
    let isNextNull = false;
    while (!isNextNull) {
      if (counter === index) return newNode;
      if (newNode.next) {
        newNode = newNode.next;
        counter++;
      } else {
        isNextNull = true;
      }
    }
    if (index > counter) {
      return null;
    }
  }

  removeAt(index) {
    let newNode = this.head;
    if (!newNode) {
      return null;
    }
    let counter = 0;
    let isNextNull = false;
    while (!isNextNull) {
      if (index === 0) {
        const nextNode = this.head.next;
        this.head = nextNode;
        return;
      }
      if (!newNode || !newNode.next) {
        return;
      }
      if (counter + 1 === index) {
        try {
          const nextTonext = newNode.next.next;
          newNode.next = nextTonext;
          return;
        } catch (e) {
          newNode.next = null;
          return;
        }
      }
      if (newNode.next) {
        newNode = newNode.next;
        counter++;
      } else {
        isNextNull = true;
      }
    }
  }

  insertAt(data, index) {
    let counter = 0;
    const insertedNode = new Node(data);
    let newNode = this.head;
    if (!newNode) {
      this.head = new Node(data);
      return;
    }
    let isNextNull = false;
    while (!isNextNull) {
      if (index === 0) {
        const nextNode = this.head;
        this.head = insertedNode;
        insertedNode.next = nextNode;
        return;
      }
      if (counter + 1 === index) {
        const nextNode = newNode.next;
        newNode.next = insertedNode;
        insertedNode.next = nextNode;
        return;
      }
      if (newNode.next) {
        newNode = newNode.next;
        counter++;
      } else {
        isNextNull = true;
      }
    }
    if (index > counter + 1) {
      this.insertLast(data);
    }
  }

  forEach(fn) {
    let newNode = this.head;
    if (!newNode) return;
    let isNextNull = false;
    while (!isNextNull) {
      if (newNode) {
        fn.call(this, newNode);
        newNode = newNode.next;
      } else {
        isNextNull = true;
      }
    }
  }
}
const l = new LinkedList();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);
console.log(l.getAt(3).data);
l.removeAt(3);
console.log(l.getAt(3));

module.exports = { Node, LinkedList };
