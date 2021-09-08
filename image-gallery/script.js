const panelItems = document.querySelectorAll('.panel');

panelItems.forEach(panel => {
    panel.addEventListener('click', e => {
        e.target.closest('.panel').classList.toggle('open-active')
    })
});