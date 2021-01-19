import './styles/main.scss';
import * as complexityData from './DS_types/allComplexityData';

const getAllBtn = Array.prototype.slice.call(
    document.querySelectorAll('button')
);
const mainHeading = document.getElementById('mainHeading');
const complexityContainer = document.getElementById('complexityContainer');
const complexityDataRowElement = document.getElementById('complexityData');
const codeSnippetContainers = document.querySelectorAll('.codeSnippet');

function generateRowData(data) {
    let result = `<td><a target="_blank" href="${data.url}">${data.type}</a></td>`;
    for (let i = 0; i < data.complexityData.length; i++) {
        result += `<td><code class="${data.complexityData[i].color}">${data.complexityData[i].complexity}</code></td>`;
    }
    return result;
}

const showComplexity = (complexityData) => {
    complexityContainer.classList.remove('hide');
    complexityDataRowElement.innerHTML = generateRowData(complexityData);
};

window.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('button')) {
        getAllBtn.forEach((element) => {
            if (event.target.value === 'Go To HOME') {
                element.classList.remove('hide');
                mainHeading.classList.remove('hide');
                event.target.classList.add('hide');
                complexityContainer.classList.add('hide');
            } else {
                mainHeading.classList.add('hide');
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
                    showComplexity(complexityData.arrayComplexity);
                    return;
                case 'STACK':
                    showComplexity(complexityData.stackComplexity);
                    return;
                case 'LINKEDLIST':
                    showComplexity(complexityData.linkedListComplexity);
                    return;
                case 'DOUBLY LINKEDLIST':
                    showComplexity(complexityData.doublyLinkedListComplexity);
                    return;
                case 'HASH TABLE':
                    showComplexity(complexityData.hashTableComplexity);
                    return;
            }
        });

        codeSnippetContainers.forEach((ele) => {
            ele.getAttribute('data-type') === event.target.value
                ? ele.classList.remove('hide')
                : ele.classList.add('hide');
        });
    }
});
