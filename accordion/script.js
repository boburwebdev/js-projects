const accordionItemHeaders = document.querySelectorAll('.accordion-item--header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', e => {
        accordionItemHeader.classList.toggle('active');

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
        
    });
})


// Only one active accordion is displayed.

// accordionItemHeaders.forEach(accordionHeaderItem => {
//     accordionHeaderItem.addEventListener('click', e => {
//         const activeAccordionItem = document.querySelector('.accordion-item--header.active');
//         const accordionItemBody = accordionHeaderItem.nextElementSibling;

//         if (activeAccordionItem && activeAccordionItem !== accordionHeaderItem) {
//             activeAccordionItem.classList.remove('active');
//             activeAccordionItem.nextElementSibling.style.maxHeight = 0;
//         }

//         if (accordionHeaderItem.classList.contains('active')) {
//             accordionHeaderItem.classList.remove('active');
//             accordionItemBody.style.maxHeight = 0;
//         } else {
//             accordionHeaderItem.classList.add('active');
//             accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
//         }
//     });
// })