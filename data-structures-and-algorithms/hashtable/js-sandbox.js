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
    const allKeys = []

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        allKeys.push(this.data[i][0][0])
      }
    }

    return allKeys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys())
