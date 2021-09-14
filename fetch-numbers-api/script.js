const inputNumber = document.getElementById('input-number');
const factBody = document.getElementById('fact-body');
const factText = document.getElementById('fact-text');

inputNumber.addEventListener('input', getFactFromAPI);

function getFactFromAPI() {
    if (inputNumber.value !== '') {
        fetch(`http://numbersapi.com/${inputNumber.value}`)
            .then(response => response.text())
            .then(data => {
                factBody.classList.add('show');
                factText.innerText = data;
            })
            .catch(err => console.log(err));
    } else {
        factBody.classList.remove('show');
    }
}