var insetionSort = function (array) {
    for (let i = 0; i < array.length; i++) {
        let j = i - 1;
        let temp = array[i];

        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = temp;
    }

    return array;
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insetionSort(numbers);
