function quickSort(array, lowerBound, upperBound) {
    if (lowerBound < upperBound) {
        const partitionIndex = partition(array, lowerBound, upperBound);

        quickSort(array, lowerBound, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, upperBound);
    }

    return array;
}

function partition(array, lowerBound, upperBound) {
    let pivot = array[lowerBound];
    let start = lowerBound;
    let end = upperBound;

    while (start < end) {
        while (array[start] <= pivot) {
            start++;
        }

        while (array[end] > pivot) {
            end--;
        }

        if (start < end) {
            [array[end], array[start]] = [array[start], array[end]];
        }
    }

    [array[lowerBound], array[end]] = [array[end], array[lowerBound]];

    return end;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(quickSort(numbers, 0, 10));
