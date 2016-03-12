# Radix tree

A Radix tree is an special type of trie. So, what is a trie? A trie is a tree where the keys are strings and each edge is labeled with a character. Each node in the tree represents the string made by the concatenation of all the symbols (characters) in the edges of the path from the root and the actual node.

A Radix tree is a trie where each node with only one child is merged with its child. The label of each edge in a Radix tree is not a character but a string and like regular tries, each node represents the string made by the concatenation of all the strings in the edges of the path from the root to the actual node. Radix trees use much less space to store the same information, since the number of nodes is much lower. 

<img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Patricia_trie.svg" />



Installing and Running
-------
```
npm install && npm start
```

Dependencies 
-------
* babel
* express
* ejs