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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
