const inputState = document.getElementById('input-state');
const searchResults = document.getElementById('search-results');

async function getStates() {
    const res = await fetch('states.json');
    const states = await res.json();
    return states;
}

async function filterStates() {
    const regex = new RegExp(`^${inputState.value}`, 'gi');
    const states = await getStates();
    let filteredStates = states.filter(state => state.name.match(regex) || state.abbr.match(regex));

    if (inputState.value === '') {
        filteredStates = [];
    }

    return filteredStates;
}

async function displayStates() {
    const states = await filterStates();
    const formatStates = states.map(state => `
        <div class="card card-body mt-1 text-dark">
            <h4>${state.name} (${state.abbr}) <span class="text-primary">${state.capital}</span></h4>
            <small>Lat: ${state.lat} / Long: ${state.long}</small>
        </div>
    `).join('');

    searchResults.innerHTML = formatStates;
}

inputState.addEventListener('input', displayStates);