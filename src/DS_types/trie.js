class TrieNode {
    constructor(char) {
        this.children = new Array(26).fill(null); // total no. english alphabets
        this.isEndWord = false; // word is not ended yet
        this.char = char; // the value of char
    }

    // function to mark node as leaf node
    markAsLeaf() {
        this.isEndWord = true;
    }

    // function to unmark the node as leaf node
    unMarkAsLeaf() {
        this.isEndWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(''); // root with no char and all null childrens
    }
    // to get the index of current node
    getIndex(t) {
        return t.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    // to insert a key into the Trie
    insert(key) {
        if (key == null) {
            return;
        }

        key = key.toLowerCase();
        let currentNode = this.root;
        let index = 0;

        for (let level = 0; level < key.length; level++) {
            index = this.getIndex(key[level]);

            if (currentNode.children[index] == null) {
                currentNode.children[index] = new TrieNode(key[level]);
                //console.log(key[level] + " inserted", this.root);
            }

            currentNode = currentNode.children[index];
        }
        // mark the current node as leaf node
        currentNode.markAsLeaf();
        //console.log("'" + key + "' inserted");
    }

    // search in a Trie
    search(key) {
        if (key == null) {
            return false;
        }

        key = key.toLowerCase();
        let currentNode = this.root;
        let index = 0;

        for (let level = 0; level < key.length; level++) {
            index = this.getIndex(key[level]);

            if (currentNode.children[index] == null) {
                return false;
            }

            currentNode = currentNode.children[index];
        }

        if (currentNode !== null && currentNode.isEndWord) {
            return true;
        }

        return false;
    }

    // to check if current node has any child
    hasNoChildren(currentNode) {
        for (let i = 0; i < currentNode.children.length; i++) {
            if (currentNode.children[i] !== null) {
                return false;
            }
        }
        return true;
    }

    //Recursive function
    deleteHelper(key, currentNode, length, level) {
        let deletedSelf = false;

        if (currentNode == null) {
            console.log('Key does not exist');
            return deletedSelf;
        }

        //Base Case: If we have reached the node which points to the alphabet at the end of the key.
        if (level == length) {
            //If there are no nodes ahead of this node in this path
            //Then we can delete this node
            console.log('currentNode: ', currentNode, level);
            if (this.hasNoChildren(currentNode)) {
                deletedSelf = true;
            }

            //If there are nodes ahead of currentNode in this path
            //Then we cannot delete currentNode. We simply unmark this as leaf
            else {
                currentNode.unMarkAsLeaf();
                deletedSelf = false;
            }
        } else {
            let childNode = currentNode.children[this.getIndex(key[level])];
            console.log('child node: ', childNode);
            let childDeleted = this.deleteHelper(
                key,
                childNode,
                length,
                level + 1
            );
            if (childDeleted) {
                //Making children pointer also None: since child is deleted
                currentNode.children[this.getIndex(key[level])] = null;
                //If currentNode is leaf node that means currentNode is part of another key
                //and hence we can not delete this node and it's parent path nodes
                console.log(
                    'child deleted: ',
                    key[level],
                    currentNode,
                    currentNode.isEndWord,
                    currentNode.children[this.getIndex(key[level])],
                    level
                );
                if (currentNode.isEndWord) {
                    deletedSelf = false;
                }
                //If childNode is deleted but if currentNode has more children then currentNode must be part of another key
                //So, we cannot delete currentNode
                else if (this.hasNoChildren(currentNode) == false) {
                    deletedSelf = false;
                }
                //Else we can delete currentNode
                else {
                    currentNode = null;
                    deletedSelf = true;
                }
            } else {
                deletedSelf = false;
            }
        }
        return deletedSelf;
    }

    // to delete node from Trie
    delete(key) {
        if (this.root == null || key == null) {
            console.log('None key or empty trie error');
            return false;
        }

        this.deleteHelper(key, this.root, key.length, 0);
    }
}

// Input keys (use only 'a' through 'z' and lower case)
let keys = ['the', 'a', 'there', 'answer', 'any', 'by', 'bye', 'theiar', 'abc'];
let t = new Trie();
console.log('Keys to insert: ');
console.log(keys);
//Construct Trie
for (let i = 0; i < keys.length; i++) {
    t.insert(keys[i]);
}

console.log('root: ', t.root);
t.delete('theiar');
console.log('root: ', t.root);
