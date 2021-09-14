const formZipcode = document.getElementById('form-zipcode');
const inputZipcode = document.getElementById('input-zipcode');
const output = document.getElementById('output');

formZipcode.addEventListener('submit', e => {
    e.preventDefault();

    fetch(`http://api.zippopotam.us/us/${inputZipcode.value}`)
        .then(response => {
            if (response.status !== 200) {
                displayUIonError()
                throw Error('Invalid zipcode');
            } else {
                return response.json();
            }
        })
        .then(data => {
            displayUIonSuccess(data)
        })
        .catch(err => console.log(err));
});


function resetUI(input, output, iconSelector) {
    output.innerHTML = `<div class="output-content text-dark p-3">Results will be shown here</div>`;
    input.value = ``;
    document.querySelector(iconSelector).classList.remove('show');
}

function displayUIonError () {
    document.querySelector('.icon-check').classList.remove('show');
    document.querySelector('.icon-remove').classList.add('show');

    output.innerHTML = `
        <div class="output-content bg-danger">
            <div class="card-body">
                Invalid zipcode, please try again.
            </div>
        </div>
    `;

    document.querySelector('.icon-remove').addEventListener('click', () => {
        resetUI(inputZipcode, output, '.icon-remove');
    });
}

function displayUIonSuccess(data) {
    document.querySelector('.icon-remove').classList.remove('show');
    document.querySelector('.icon-check').classList.add('show');

    output.innerHTML = `
        <div class="output-content bg-success">
            <h5 class="card-header">Location Info <span class="float-end fs-6" id="close-output"><i class="fas fa-times-circle"></i></span></h5>
            <div class="card-body">
                <p><span class="fw-lighter">State:</span> ${data.places[0][`state`]}</p>
                <p><span class="fw-lighter">City:</span> ${data.places[0][`place name`]}</p>
                <p><span class="fw-lighter">Longitude:</span> ${data.places[0][`longitude`]}</p>
                <p><span class="fw-lighter">Latitude:</span> ${data.places[0][`latitude`]}</p>
            </div>
        </div>
    `;

    document.getElementById('close-output').addEventListener('click', () => {
        resetUI(inputZipcode, output, '.icon-check');
    });
}