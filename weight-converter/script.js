const inputLbs = document.getElementById('input-lbs');
const kgOutput = document.getElementById('kg-output');
const gmOutput = document.getElementById('gm-output');
const ozOutput = document.getElementById('oz-output');

inputLbs.addEventListener('input', convertWeight);

function convertWeight(e) {
    const lbs = Number(e.target.value);
    const kgValue = lbs * 0.453492;
    const gmValue = lbs * 453.592;
    const ozValue = lbs * 16;

    kgOutput.innerText = kgValue.toFixed(2);
    gmOutput.innerText = gmValue.toFixed(2);
    ozOutput.innerText = ozValue;
}