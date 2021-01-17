import './styles/main.scss';
import { arrayComplexity, arrayImplementation } from './DS_types/array';

const getAllBtn = Array.prototype.slice.call(
    document.querySelectorAll('button')
);
const mainHeading = document.getElementById('mainHeading');
const arrayComplexityContainer = document.getElementById(
    'arrayComplexityContainer'
);
const complexityDataRowElement = document.getElementById('complexityData');
const codeSnippetContainerArray = document.getElementById(
    'codeSnippetContainerArray'
);

function generateRowData(data) {
    let result = `<td><a href="${data.url}">${data.type}</a></td>`;
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
                codeSnippetContainerArray.classList.add('hide');
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
                codeSnippetContainerArray.classList.remove('hide');
            }

            if (event.target.value === 'GRAPH') {
                arrayComplexityContainer.classList.remove('hide');
                complexityDataRowElement.innerHTML = generateRowData(myData);
            }
        });
    }
});
