export const linkedListComplexity = {
    type: 'Single Linked List',
    url: 'https://en.wikipedia.org/wiki/Linked_list#Singly_linked_lists',
    complexityData: [
        { color: 'yellow', complexity: 'Θ(n)' },
        { color: 'yellow', complexity: 'Θ(n)' },
        { color: 'green', complexity: 'Θ(1)' },
        { color: 'green', complexity: 'O(1)' },
        { color: 'yellow', complexity: 'Θ(n)' },
        { color: 'yellow', complexity: 'O(n)' },
        { color: 'green', complexity: 'O(1)' },
        { color: 'green', complexity: 'O(1)' },
        { color: 'yellow', complexity: 'O(n)' },
    ],
};

// new node structure
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// linkedlist implementation
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    // append at the end O(1)
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;

        return this;
    }
    // append at the start O(1)
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;

        return this;
    }
    // append at given index O(n)
    appenAt(index, value) {
        if (index < 0 || index > this.length) {
            return;
        }
        const newNode = new Node(value);
        let count = 0;
        let currentNode = this.head;
        let previousNode;

        while (count !== index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }

        previousNode.next = newNode;
        newNode.next = currentNode;
        this.length += 1;

        return this;
    }
    // remove at given index O(n)
    removeAt(index) {
        if (index < 0 || index > this.length) {
            return;
        }
        let count = 0;
        let currentNode = this.head;
        let previousNode;

        while (count !== index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }

        previousNode.next = currentNode.next;
        this.length -= 1;

        return this;
    }

    // remove the head O(1)
    removeHead() {
        this.head = this.head.next;
        this.length -= 1;
        return this;
    }
    // remove the tail O(n)
    removeTail() {
        let current = this.head;
        let previous;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.tail = previous;
        this.length -= 1;

        return this;
    }
    // search given value O(n)
    search(value) {
        let current = this.head;
        let index = 0;

        while (current.value !== value) {
            current = current.next;
            index += 1;
            if (current == null) {
                return 'item not found';
            }
        }

        return index;
    }
}

const ll = new LinkedList(100);
console.log(ll.append(500));
ll.prepend(555);
ll.prepend(666);
console.log(ll.prepend(444));
console.log(ll.appenAt(2, 999));
console.log(ll.appenAt(4, 888));
console.log(ll.removeAt(4));
console.log(ll.removeHead());
ll.removeTail();
console.log(ll.search(555));
