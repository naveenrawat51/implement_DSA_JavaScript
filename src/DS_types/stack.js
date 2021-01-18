class Mystack {
    constructor() {
        this.count = 0;
        this.data = [];
    }

    push(item) {
        this.data[this.count] = item;
        this.count += 1;
        return this.data;
    }

    pop() {
        if (this.count) {
            const deletedItem = this.data[this.count - 1];
            this.data.splice(this.count - 1, 1);
            this.count -= 1;
            return deletedItem;
        }
        return undefined;
    }

    peek() {
        return this.data[this.count - 1];
    }

    printStack() {
        return this.data;
    }

    isEmpty() {
        return this.count === 0;
    }
}

// const stack1 = new Mystack();
// console.log(stack1.push(200));
// console.log(stack1.push(100));
// console.log(stack1.push(500));
// console.log(stack1.pop());
// console.log(stack1.printStack());
// console.log(stack1.peek());
// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.peek());
// console.log(stack1.isEmpty());
