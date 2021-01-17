import './styles/main.scss';
import { arrayComplexity } from './DS_types/array';
import { stackComplexity } from './DS_types/stack';

const getAllBtn = Array.prototype.slice.call(
    document.querySelectorAll('button')
);
const mainHeading = document.getElementById('mainHeading');
const arrayComplexityContainer = document.getElementById(
    'arrayComplexityContainer'
);
const complexityDataRowElement = document.getElementById('complexityData');
const codeSnippetContainers = document.querySelectorAll('.codeSnippet');

function generateRowData(data) {
    let result = `<td><a target="_blank" href="${data.url}">${data.type}</a></td>`;
    for (let i = 0; i < data.complexityData.length; i++) {
        result += `<td><code class="${data.complexityData[i].color}">${data.complexityData[i].complexity}</code></td>`;
    }
    return result;
}

window.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('button')) {
        getAllBtn.forEach((element) => {
            if (event.target.value === 'Go To HOME') {
                element.classList.remove('hide');
                mainHeading.classList.remove('hide');
                event.target.classList.add('hide');
                arrayComplexityContainer.classList.add('hide');
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

            if (event.target.value === 'ARRAY') {
                arrayComplexityContainer.classList.remove('hide');
                complexityDataRowElement.innerHTML = generateRowData(
                    arrayComplexity
                );
            }

            if (event.target.value === 'STACK') {
                arrayComplexityContainer.classList.remove('hide');
                complexityDataRowElement.innerHTML = generateRowData(
                    stackComplexity
                );
            }
        });

        codeSnippetContainers.forEach((ele) => {
            if (ele.getAttribute('data-type') === event.target.value) {
                ele.classList.remove('hide');
            } else {
                ele.classList.add('hide');
            }
        });
    }
});
