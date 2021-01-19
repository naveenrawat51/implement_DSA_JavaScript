class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // hash method
    hashKey(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    // set a key value in hash table
    set(key, value) {
        const address = this.hashKey(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);

        return this.data;
    }

    // get the item from hash table
    get(key) {
        const address = this.hashKey(key);
        const getArray = this.data[address];

        if (getArray && getArray.length > 1) {
            for (let item of getArray) {
                if (item[0] === key) {
                    return item;
                }
            }
        }

        return (getArray && getArray[0]) || 'Record not found';
    }
}

const hash1 = new HashTable(6);
console.log(hash1.set('naveen', 32));
console.log(hash1.set('sangeeta', 24));
console.log(hash1.set('kamal', 24));
console.log(hash1.set('arya', 24));
console.log(hash1.set('sanju', 24));
console.log(hash1.get('naveen'));
console.log(hash1.get('sangeeta'));
console.log(hash1.get('sanju'));
