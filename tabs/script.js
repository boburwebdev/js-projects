const tabHeaderItems = document.querySelectorAll('.tabs-header--item');
const tabBodyItems = document.querySelectorAll('.tabs-body--item');

tabHeaderItems.forEach((tabHeaderItem, tabIndex) => {
    tabHeaderItem.addEventListener('click', () => {
        tabHeaderItems.forEach((tab, idx) => {
            tab.classList.remove('active');
            tabBodyItems[idx].classList.remove('active');
        });

        tabHeaderItem.classList.add('active');
        tabBodyItems[tabIndex].classList.add('active');
    });
})