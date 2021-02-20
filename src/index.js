import './styles/main.scss';
import * as complexityData from './DS_types/allComplexityData';
import * as sortComplexityData from './sorting-algorithms/allComplexityData';

const getAllBtn = Array.prototype.slice.call(
    document.querySelectorAll('button')
);
const mainContainer = document.getElementById('allBtnContainer');
const complexityContainer = document.getElementById('complexityContainer');
const sortComplexityContainer = document.getElementById(
    'sortComplexityContainer'
);
const complexityDataRowElement = document.getElementById('complexityData');
const sortComplexityDataRowElement = document.getElementById(
    'sortComplexityData'
);
const codeSnippetContainers = document.querySelectorAll('.codeSnippet');

function generateRowData(data) {
    let result = `<td><a target="_blank" href="${data.url}">${data.type}</a></td>`;
    for (let i = 0; i < data.complexityData.length; i++) {
        result += `<td><code class="${data.complexityData[i].color}">${data.complexityData[i].complexity}</code></td>`;
    }
    return result;
}

const showComplexity = (complexityData, type) => {
    if (type == 'sort') {
        sortComplexityContainer.classList.remove('hide');
        sortComplexityDataRowElement.innerHTML = generateRowData(
            complexityData
        );
    } else {
        complexityContainer.classList.remove('hide');
        complexityDataRowElement.innerHTML = generateRowData(complexityData);
    }
};

window.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('button')) {
        getAllBtn.forEach((element) => {
            if (event.target.value === 'Go To HOME') {
                element.classList.remove('hide');
                mainContainer.classList.remove('hide-heading');
                event.target.classList.add('hide');
                complexityContainer.classList.add('hide');
                sortComplexityContainer.classList.add('hide');
            } else {
                mainContainer.classList.add('hide-heading');
                if (
                    element.value !== event.target.value &&
                    element.classList.contains('ds-btn')
                ) {
                    element.classList.add('hide');
                }
                if (element.value === 'Go To HOME') {
                    element.classList.remove('hide');
                }
            }

            switch (event.target.value) {
                case 'ARRAY':
                    showComplexity(complexityData.array);
                    return;
                case 'STACK':
                    showComplexity(complexityData.stack);
                    return;
                case 'LINKEDLIST':
                    showComplexity(complexityData.linkedList);
                    return;
                case 'DOUBLY LINKEDLIST':
                    showComplexity(complexityData.doublyLinkedList);
                    return;
                case 'HASH TABLE':
                    showComplexity(complexityData.hashTable);
                    return;
                case 'BINARY SEARCH TREE':
                    showComplexity(complexityData.binarySearchTree);
                    return;
                case 'AVL BINARY SEARCH TREE':
                    showComplexity(complexityData.AvlBinarySearchTree);
                    return;
                case 'QUEUE':
                    showComplexity(complexityData.queue);
                    return;
                case 'MIN HEAP':
                    showComplexity(complexityData.heap);
                    return;
                case 'BUBBLE SORT':
                    showComplexity(sortComplexityData.bubbleSort, 'sort');
                    return;
                case 'SELECTION SORT':
                    showComplexity(sortComplexityData.selectionSort, 'sort');
                    return;
                case 'INSERTION SORT':
                    showComplexity(sortComplexityData.insertionSort, 'sort');
                    return;
                case 'MERGE SORT':
                    showComplexity(sortComplexityData.mergeSort, 'sort');
            }
        });

        codeSnippetContainers.forEach((ele) => {
            ele.getAttribute('data-type') === event.target.value
                ? ele.classList.remove('hide')
                : ele.classList.add('hide');
        });
    }
});
