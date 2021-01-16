import './styles/main.scss';

const getAllBtn = Array.prototype.slice.call(
    document.querySelectorAll('button')
);
const mainHeading = document.getElementById('mainHeading');

window.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target.classList.contains('button')) {
        getAllBtn.forEach((element) => {
            if (event.target.value === 'Go To HOME') {
                element.classList.remove('hide');
                mainHeading.classList.remove('hide');
                event.target.classList.add('hide');
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
        });
    }
});
