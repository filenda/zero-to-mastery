//If you know a solution is not far from the root of the tree:
// R> BFS

//If the tree is very deep and solutions are rare:
// R> BFS (DFS will take too long bc of deepness)

//If the tree is very wide:
// R> DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree:
// R> DFS

//Determining whether a path exists between two nodes:
// R> DFS. This is essentially what DFS was built for

//Finding the shortest path:
// R> BFS. This is because BFS checks each "floor" and thus
// can garantee that once it finds the destination node, it
// went through each floor in search of it