const modal = document.getElementById('modal');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');


function openModal() {
    modal.classList.add('show');
}

function closeModal(e) {
    if (e.target === modal || e.target === btnCloseModal) {
        modal.classList.remove('show');
    }
}

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);