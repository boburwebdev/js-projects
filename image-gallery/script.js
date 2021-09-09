const panelItems = document.querySelectorAll('.panel');

// panelItems.forEach(panel => {
//     panel.addEventListener('click', e => {
//         e.target.closest('.panel').classList.toggle('open-active')
//     })
// });


// Alternative solution with currentTarget
// panelItems.forEach(panel => {
//     panel.addEventListener('click', e => {
//         e.currentTarget.classList.toggle('open');
//     });

//     panel.addEventListener('transitionend', e => {
//         if (e.propertyName.includes('flex')) {
//             e.currentTarget.classList.toggle('open-active');
//         }
//     })
// })


// Alternative solution
panelItems.forEach(panel => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleOpenActive)
});

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleOpenActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}