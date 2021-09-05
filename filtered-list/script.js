const contacts = document.getElementById('contacts-list');
const listItems = contacts.getElementsByClassName('list-group-item-light');
const listItemsArray = Array.from(listItems);

const inputSearch = document.getElementById('input-search');
inputSearch.addEventListener('input', filterContacts);

function filterContacts(e) {
    listItemsArray.forEach(item => {
        if (item.textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) === -1) {
            item.style.display = 'none'
        } else {
            item.style.display = '';
        }
    });
}



