function insetionSort(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[0] > array[i]) {
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }

    return array;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insetionSort(numbers);
