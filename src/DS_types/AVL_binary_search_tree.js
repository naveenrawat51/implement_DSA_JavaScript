class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class AvlBinarySearchTree {
    constructor() {
        this.root = null;
        this.Balance = Object.freeze({
            UNBALANCED_LEFT: 2,
            SEMIUNBALANCED_LEFT: 1,
            SEMIUNBALANCED_RIGHT: -1,
            UNBALANCED_RIGHT: -2,
            BALANCED: 0,
        });
        this.comparison = Object.freeze({
            BIGGER: 1,
            BIGGER_OR_EQUAL: [1, 0],
            SMALLER: -1,
            SMALLER_OR_EQUAL: [-1, 0],
            EQUAL: 0,
        });
    }

    compare(a, b) {
        if (a > b) return this.comparison.BIGGER;
        if (a < b) return this.comparison.SMALLER;

        return this.comparison.EQUAL;
    }

    // insert element into BST
    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.root = this.insertNode(newNode);
        }
    }

    insertNode(newNode, currentNode = this.root) {
        if (newNode.value < currentNode.value) {
            currentNode.left = !currentNode.left
                ? newNode
                : this.insertNode(newNode, currentNode.left);
        } else {
            currentNode.right = !currentNode.right
                ? newNode
                : this.insertNode(newNode, currentNode.right);
        }

        return this.balanceNode(currentNode, newNode.value);
    }

    balanceNode(node, value = null) {
        if (node === null) {
            return node;
        }

        const balance = this.getNodeBalanceFactor(node);
        console.log('balance: ' + balance + ' for : ' + node.value);
        if (balance === this.Balance.UNBALANCED_LEFT) {
            if (value) {
                node =
                    this.compare(value, node.left.value) ===
                    this.comparison.SMALLER
                        ? this.RRotation(node)
                        : this.LRRotation(node);
            } else if (node.left) {
                const leftBalance = this.getNodeBalanceFactor(node.left);

                if (leftBalance === this.Balance.SEMIUNBALANCED_LEFT) {
                    console.log('no key left 1', leftBalance);
                    return this.RRotation(node);
                }

                if (leftBalance === this.Balance.SEMIUNBALANCED_RIGHT) {
                    console.log('no key left 2', leftBalance);
                    return this.LRRotation(node);
                }
            }
        }

        if (balance === this.Balance.UNBALANCED_RIGHT) {
            if (value) {
                node = this.comparison.BIGGER_OR_EQUAL.includes(
                    this.compare(value, node.right.value)
                )
                    ? this.LRotation(node)
                    : this.RLRotation(node);
            } else if (node.right) {
                const rightBalance = this.getNodeBalanceFactor(node.right);
                console.log('right', rightBalance);

                if (rightBalance === this.Balance.SEMIUNBALANCED_RIGHT) {
                    console.log('no key right 1', rightBalance);
                    return this.LRotation(node);
                }

                if (rightBalance === this.Balance.SEMIUNBALANCED_LEFT) {
                    console.log('no key right 2', rightBalance);
                    return this.RLRotation(node);
                }
            }
        }

        return node;
    }

    getNodeBalanceFactor(node) {
        return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    }

    getNodeHeight(node) {
        if (node === null) {
            return 0;
        }

        return (
            Math.max(
                this.getNodeHeight(node.left),
                this.getNodeHeight(node.right)
            ) + 1
        );
    }

    RRotation(node) {
        const detached = node.left;
        node.left = detached.right;
        detached.right = node;
        return detached;
    }

    LRotation(node) {
        const detached = node.right;
        node.right = detached.left;
        detached.left = node;
        return detached;
    }

    LRRotation(node) {
        node.left = this.LRotation(node.left);
        return this.RRotation(node);
    }

    RLRotation(node) {
        node.right = this.RRotation(node.right);
        return this.LRotation(node);
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
        this.root = this.removeNode(value);
    }

    removeNode = (value, node = this.root) => {
        if (node === null) return null;

        if (this.compare(value, node.value) === this.comparison.SMALLER) {
            node.left = this.removeNode(value, node.left);
            return this.balanceNode(node);
        }

        if (this.compare(value, node.value) === this.comparison.BIGGER) {
            node.right = this.removeNode(value, node.right);
            return this.balanceNode(node);
        }

        // match node is the leaf node
        if (node.left === null && node.right === null) {
            node = null;
        } else if (node.left === null) {
            // match node lack left or right node
            node = node.right;
        } else if (node.right === null) {
            node = node.left;
        } else {
            // match node has both of its nodes
            const max = this.maxNode(node.left);
            node.value = max.value;
            node.left = this.removeNode(max.value, node.left);
        }

        return this.balanceNode(node, value);
    };

    maxNode = (node) => {
        while (node !== null && node.right !== null) {
            node = node.right;
        }

        return node;
    };
}

const bst1 = new AvlBinarySearchTree();
bst1.insert(9);
bst1.insert(4);
bst1.insert(6);
bst1.remove(6);
console.log(bst1.root);
