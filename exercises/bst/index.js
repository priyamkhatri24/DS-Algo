// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data, node = this) {
    if (node.left && data < node.data) {
      node = node.left;
      this.insert(data, node);
    } else if (!node.left && data < node.data) {
      node.left = new Node(data);
    }
    if (node.right && data >= node.data) {
      node = node.right;
      this.insert(data, node);
    } else if (!node.right && data >= node.data) {
      node.right = new Node(data);
    }
  }

  //   contains(data) {
  //     let currentNode = this;
  //     if (currentNode.data && currentNode.data === data) {
  //       return currentNode;
  //     }
  //     let arr = [currentNode];
  //     while (arr.length) {
  //       const currentNode = arr.shift();
  //       if (currentNode.data && currentNode.data === data) {
  //         return currentNode;
  //       }
  //       const children = [];
  //       if (currentNode.left) children.push(currentNode.left);
  //       if (currentNode.right) children.push(currentNode.right);
  //       arr.push(...children);
  //     }
  //     return null;
  //   }
  contains(data) {
    let currentNode = this;
    while (true) {
      if (currentNode.left && data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (currentNode.right && data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (data === currentNode.data) {
        return currentNode;
      } else {
        return null;
      }
    }
  }
}

module.exports = Node;
