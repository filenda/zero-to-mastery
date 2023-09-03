class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //TOCHECK: To put an underscore before the function name in a function declaration
  //is just just a developers' pattern so you know that the function is private
  //and should not be used out of the class scope, even though technically you can
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      //TOCHECK: Hashtable collision consideration
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        //TOCHECK: but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys())
