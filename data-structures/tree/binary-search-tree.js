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

  //TODO: The code freezes when calling lookup for the value '171'. Check why and fix.
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

  _predecessorAndHeight(startingNode) {
    let height = 0
    let currentNode = startingNode
    let predecessorParent = null

    if (currentNode.right) {
      while (currentNode) {
        if (currentNode.right) {
          predecessorParent = currentNode // 59 60
        }

        currentNode = currentNode.right // 60 62 null
        height++ // 1 2 3
      }
    }
    else {
      height = 1
    }

    return {
      height,
      predecessor: currentNode,
      predecessorParent
    }
  }

  _successorAndHeight(startingNode) {
    let height = 0
    let currentNode = startingNode
    let successorParent = null

    if (currentNode.left) {
      while (currentNode) {

        if (currentNode.left) {
          successorParent = currentNode // 76 67
        }

        currentNode = currentNode.left // 67 65 null
        height++ // 1 2 3

      }
    }
    else {
      height = 1
    }

    return {
      height,
      successor: currentNode,
      successorParent
    }
  }

  remove(value) {
    let parentNode = {}
    let currentNode = this.root;

    while (currentNode) {

      if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      //currentNode.value === value
      else {
        if (!currentNode.right && !currentNode.left) {
          if (parentNode.right.value === currentNode.value) {
            parentNode.right = null;
          }
          else if (parentNode.left.value === currentNode.value) {
            parentNode.left = null;
          }
        }
        else if (currentNode.right && !currentNode.left) {
          if (parentNode.right.value === currentNode.value) {
            parentNode.right = currentNode.right;
          }
          else if (parentNode.left.value === currentNode.value) {
            parentNode.left = currentNode.right;
          }
        }
        else if (currentNode.left && !currentNode.right) {
          if (parentNode.right.value === currentNode.value) {
            parentNode.right = currentNode.left;
          }
          else if (parentNode.left.value === currentNode.value) {
            parentNode.left = currentNode.left;
          }
        }
        //currentNode.left && currentNode.right
        else {
          const predecessorAndHeight = this._predecessorAndHeight(currentNode.left)
          console.log('predecessorAndHeight', JSON.stringify(predecessorAndHeight))

          const successorAndHeight = this._successorAndHeight(currentNode.right)
          console.log('successorAndHeight', JSON.stringify(successorAndHeight))

          if (predecessorAndHeight.height >= successorAndHeight.height) {
            if (parentNode.right.value === currentNode.value) {
              parentNode.right = predecessorAndHeight.predecessor
            }
            else if (parentNode.left.value === currentNode.value) {
              parentNode.left = predecessorAndHeight.predecessor
            }

            predecessorAndHeight.predecessor.right = currentNode.right
            if (predecessorAndHeight.predecessorParent) {
              predecessorAndHeight.predecessorParent.right = null
            }
          }
          else {
            if (parentNode.right.value === currentNode.value) {
              parentNode.right = successorAndHeight.successor
            }
            else if (parentNode.left.value === currentNode.value) {
              parentNode.left = successorAndHeight.successor
            }

            successorAndHeight.successor.left = currentNode.left
            if (successorAndHeight.successorParent) {
              successorAndHeight.successorParent.left = null
            }
          }
        }

        break;
      }
    }
  }

  //TOCHECK: Compare this better version with the above one (too much code and less efficient)
  remove2(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  //TODO: Implement this yourself
  breadthFirstSearch() { // BFS
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  //     9
  //  4     20
  //1  6  15  170

  breadthFirstSearchRecursive(queue, list) {
    if (!queue || queue.length === 0) {
      return list
    }

    let currentNode = queue.shift();

    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left)
    }

    if (currentNode.right) {
      queue.push(currentNode.right)
    }

    return this.breadthFirstSearchRecursive(queue, list);
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(15)
tree.insert(170)
// tree.insert(171)
// tree.remove(20)
console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.breadthFirstSearch())
console.log(tree.breadthFirstSearchRecursive([tree.root], []))
// console.log(JSON.stringify(tree.lookup(170)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}