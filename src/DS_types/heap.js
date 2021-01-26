class MinHeap {
    constructor() {
        this.heap = [null];
    }

    // get min item
    getMin() {
        return this.heap[1];
    }

    // insert item
    insert(node) {
        this.heap.push(node);

        if (this.heap.length > 1) {
            let current = this.heap.length - 1;

            while (
                current > 1 &&
                this.heap[Math.floor(current / 2)] > this.heap[current]
            ) {
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [
                    this.heap[current],
                    this.heap[Math.floor(current / 2)],
                ];
                current = Math.floor(current / 2);
            }
        }

        return this.heap;
    }

    remove() {
        let smallest = this.heap[1];

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (
                this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[current] > this.heap[leftChildIndex] ||
                    this.heap[current] > this.heap[rightChildIndex])
            ) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [
                        this.heap[leftChildIndex],
                        this.heap[current],
                    ];
                    current = leftChildIndex;
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [
                        this.heap[rightChildIndex],
                        this.heap[current],
                    ];
                    current = rightChildIndex;
                }

                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            }

            if (
                this.heap[rightChildIndex] === undefined &&
                this.heap[leftChildIndex] < this.heap[current]
            ) {
                [this.heap[current], this.heap[leftChildIndex]] = [
                    this.heap[leftChildIndex],
                    this.heap[current],
                ];
            }
        } else if (this.heap.length === 2) {
            /* If there are only two elements in the array, we directly splice out the first element */
            this.heap.splice(1, 1);
        } else {
            return null;
        }

        return smallest;
    }
}

const minHeap = new MinHeap();
console.log(minHeap.insert(32));
console.log(minHeap.insert(38));
console.log(minHeap.insert(45));
console.log(minHeap.insert(57));
console.log(minHeap.insert(10));
console.log(minHeap.insert(23));
console.log(minHeap.insert(36));
console.log(minHeap.insert(6));
minHeap.remove();
console.log(minHeap.getMin());
console.log(minHeap.heap);
