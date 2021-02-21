class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert element into BST
    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }

                if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }

        return this;
    }

    // look up for node
    lookup(value) {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }

        return false;
    }

    // remove node
    remove(value) {
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
            } else if (value === currentNode.value) {
                if (!currentNode.right) {
                    if (!parentNode) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (!currentNode.right.left) {
                    if (!parentNode) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                } else {
                    let leftMost = currentNode.right.left;
                    let leftMostParent = currentNode.right;
                    while (leftMost.left !== null) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }

                    leftMostParent.left = leftMost.right;
                    leftMost.left = currentNode.left;
                    leftMost.right = currentNode.right;

                    if (!parentNode) {
                        this.root = leftMost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftMost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftMost;
                        }
                    }
                }

                return true;
            }
        }
        return false;
    }

    breadthFirstSearch() {
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

    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length) {
            return list;
        }
        const currentNode = queue.shift();

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        list.push(currentNode.value);

        return this.breadthFirstSearchRecursive(queue, list);
    }
}

const bst1 = new BinarySearchTree();
bst1.insert(9);
bst1.insert(4);
bst1.insert(6);
bst1.insert(20);
bst1.insert(170);
bst1.insert(15);
bst1.insert(1);
bst1.insert(13);
bst1.insert(17);
bst1.insert(89);
bst1.insert(90);
bst1.insert(220);
bst1.insert(190);
console.log(bst1.insert(8));
console.log(bst1.remove(9));
console.log(bst1.lookup(9));
console.log(bst1.breadthFirstSearch());
console.log(bst1.breadthFirstSearchRecursive([bst1.root], []));
