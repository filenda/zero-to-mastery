class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    }
    else {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.value === newNode.value) {
          return currentNode;
        }
        else if (newNode.value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
          }
          else {
            currentNode.right = newNode;
            return true;
          }
        }
        // newNode.value < currentNode.value
        else {
          if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
          }
          else {
            currentNode.left = newNode;
            return true;
          }
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      else if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
          continue;
        }
      }
      // value < currentNode.value
      else {
        if (currentNode.left) {
          currentNode = currentNode.left;
          continue;
        }
      }
    }

    return currentNode;
  }

  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(JSON.stringify(traverse(tree.root)))
console.log(JSON.stringify(tree.lookup(170)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}