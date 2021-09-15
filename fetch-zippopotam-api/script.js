const formZipcode = document.getElementById('form-zipcode');
const inputZipcode = document.getElementById('input-zipcode');
const selectCountry = document.getElementById('select-country');
const output = document.getElementById('output');
const zipcodeRange = document.getElementById('zipcode-range');

const objZipcodeRange = {
    'US': '00210 - 99950',
    'DE': '01067 - 99998',
    'ES': '01001 - 52080',
    'FR': '01000 - 98799'
}

selectCountry.addEventListener('change', showZipcodeRange)
formZipcode.addEventListener('submit', getLocationInfoFromAPI);


function showZipcodeRange() {
    if (objZipcodeRange[selectCountry.value]) {
        zipcodeRange.classList.add('show');
        zipcodeRange.innerText = `Range: ${objZipcodeRange[selectCountry.value]}`;
    } else {
        zipcodeRange.classList.remove('show');
    }
}


function getLocationInfoFromAPI(e) {
    e.preventDefault();

    if (inputZipcode.value !== '' && selectCountry.value !== '') {
        fetch(`http://api.zippopotam.us/${selectCountry.value}/${inputZipcode.value}`)
        .then(response => {
            if (response.status !== 200) {
                displayUIonError('Invalid zipcode, please try again.');
                throw Error('Invalid zipcode');
            } else {
                return response.json();
            }
        })
        .then(data => {
            displayUIonSuccess(data);
        })
        .catch(err => displayUIonError(err));
    } else {
        displayUIonError('Please, fill in all fields');
    }
}


function displayUIonError(errorMessage) {
    document.querySelector('.icon-check').classList.remove('show');
    document.querySelector('.icon-remove').classList.add('show');

    output.innerHTML = `
        <div class="output-content bg-danger">
            <div class="card-body">
                ${errorMessage}
            </div>
        </div>
    `;

    document.querySelector('.icon-remove').addEventListener('click', () => {
        // resetUI(output, '.icon-remove');
        clearUIfromErrors();
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
        resetUI(output, '.icon-check');
    });
}


function resetUI(output, iconSelector) {
    formZipcode.reset();
    output.innerHTML = `<div class="output-content text-dark p-3">Results will be shown here</div>`;

    zipcodeRange.classList.remove('show');
    document.querySelector(iconSelector).classList.remove('show');
}


function clearUIfromErrors() {
    output.innerHTML = `<div class="output-content text-dark p-3">Results will be shown here</div>`;
    inputZipcode.value = ``;
    document.querySelector('.icon-remove').classList.remove('show');
}