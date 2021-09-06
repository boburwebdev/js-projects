const inputWeight = document.getElementById('input-weight');
const selectWeight = document.getElementById('select-weight');
const kgOutput = document.getElementById('kg-output');
const gmOutput = document.getElementById('gm-output');
const ozOutput = document.getElementById('oz-output');
const lbsOutput = document.getElementById('lbs-output');
const results = document.getElementById('results');

inputWeight.addEventListener('input', convertWeight);
selectWeight.addEventListener('change', convertWeight);

function convertWeight() {
    const inputValue = Number(inputWeight.value);
    const weightType = selectWeight.value;
    
    let kgValue, gmValue, ozValue, lbsValue;

    switch(weightType) {
        case 'lbs': 
            kgValue = inputValue * 0.453492;
            gmValue = inputValue * 453.592;
            ozValue = inputValue * 16;
            lbsValue = inputValue * 1;
            break;
        case 'oz': 
            kgValue = inputValue * 0.0283495;
            gmValue = inputValue * 28.3495;
            ozValue = inputValue * 1;
            lbsValue = inputValue * 0.0625;
            break;
        case 'kg':
            kgValue = inputValue * 1;
            gmValue = inputValue * 1000;
            ozValue = inputValue * 35.274;
            lbsValue = inputValue * 2.20462;
            break;
        case 'gm':
            kgValue = inputValue * 0.001;
            gmValue = inputValue * 1;
            ozValue = inputValue * 0.035274;
            lbsValue = inputValue * 0.00220462;
            break;
        default:
            kgValue = 0;
            gmValue = 0;
            ozValue = 0;
            lbsValue = 0;
            break;
    }

    displayWeights(kgValue, gmValue, ozValue, lbsValue);
}

function displayWeights(kgValue, gmValue, ozValue, lbsValue) {
    kgOutput.innerText = kgValue;
    gmOutput.innerText = gmValue;
    ozOutput.innerText = ozValue;
    lbsOutput.innerText = lbsValue;
}