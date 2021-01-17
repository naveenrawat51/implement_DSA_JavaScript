export const arrayComplexity = {
    type: 'Array',
    url: 'http://en.wikipedia.org/wiki/Array_data_structure',
    complexityData: [
        { color: 'green', complexity: 'Θ(1)' },
        { color: 'yellow', complexity: 'Θ(n)' },
        { color: 'yellow', complexity: 'Θ(n)' },
        { color: 'yellow', complexity: 'O(n)' },
        { color: 'green', complexity: 'Θ(1)' },
        { color: 'yellow', complexity: 'O(n)' },
        { color: 'yellow', complexity: 'O(n)' },
        { color: 'yellow', complexity: 'O(n)' },
        { color: 'yellow', complexity: 'O(n)' },
    ],
};

class Myarray {
    constructor(size) {
        (this.data = {}), (this.length = 0);

        for (let i = 0; i < size; i++) {
            this.data[i] = undefined;
            this.length++;
        }
    }

    push(item) {
        this.data[this.length] = item;
        this.length += 1;
        return this.data;
    }

    pop() {
        if (this.length) {
            delete this.data[this.length - 1];
            this.length -= 1;
            console.log(this.data, this.length);
            return this.data;
        }
        return null;
    }

    map(callback) {
        if (typeof callback === 'Function' || typeof callback === 'function') {
            const result = {};
            for (let i = 0; i < this.length; i++) {
                result[i] = callback(this.data[i], i, this.data);
            }
            return (this.data = result);
        }
        return null;
    }

    filter(callback) {
        if (typeof callback === 'Function' || typeof callback === 'function') {
            const result = {};
            let counter = 0;
            for (let i = 0; i < this.length; i++) {
                if (callback(this.data[i], i, this.data)) {
                    result[counter] = this.data[i];
                    counter++;
                }
            }

            return (this.data = result);
        }
        return [];
    }
}

const array1 = new Myarray();
array1.push(5);
array1.push(23);
array1.push(3);
console.log(array1.map((element) => element * 2));
console.log(array1.filter((element) => element > 10));
