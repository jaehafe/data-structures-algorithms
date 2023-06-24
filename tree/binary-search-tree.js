class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      //  root가 존재하면
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        // insert할 value가 root 보다 작으면
        if (value < current.value) {
          // root의 left가 null이면 insert 3을 root의 left에 할당
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            // left가 있으면
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return null;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        console.log('current.left>>', current.left);
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      console.log('node>>', node);
      data.push(node.value);
      // 왼쪽 값이 있는지 확인
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // DFS - pre order
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return data;
  }
}
// QUEUE: [15, 3, 8]
// DATA: [10, 6]
//      10
//    6   15
//  3  8    20

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// BFS
// 1. create a queue and a variable to store the values fo nodes visited
// 2. place the root node in the queue
// 3. loop as long as there is anything in the queue
// 3-1. dequeue a node from the queue and push the value of the node into the variable that stores the nodes
// 3-2. if there is a left property on the node dequeued - add it to the queue
// 3-3. if there is a right property on the node dequeued - add it to the queue
// 4. return the variable that stores the values

// DFS - pre order
// 1. create a variable to store the values fo nodes visited
// 2. store the root of the BST in a variable called current
// 3. write a helper function which accepts a node
// 3-1. push the value of the node to the variable that stores the values
// 3-2. if the node has a left property, call the helper function with the left property on the node
// 3-3. if the node has a right property, call the helper function with the right property on the node
// 4. invoke the helper function with the current variable
// 5. return the array of values
