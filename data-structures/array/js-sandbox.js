const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do strings[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

strings[2] //O(1)

//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)
strings.pop(); //O(1)

//unshift
strings.unshift('x') //O(n)

//splice
strings.splice(2, 0, 'alien'); //O(n)

console.log(strings)