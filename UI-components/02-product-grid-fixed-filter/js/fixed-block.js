const fixedBlock = document.querySelector('.filters-price'),
      filters = document.querySelector('.filters'),
      container = document.querySelector('.container'),
      offsetLeft = filters.offsetLeft,
      filtersOffsetTop = filters.offsetTop,
      filtersWidth = filters.offsetWidth;
      smallOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gutter'));

const fixBlockOnScroll = () => {
    const scrollDistance = window.scrollY;

    if (scrollDistance > (filtersOffsetTop - smallOffset) && scrollDistance <= (filters.offsetHeight + filtersOffsetTop)) {
        setFixedFilterPosition();
        fixedBlock.classList.remove('absolute-filters');
    } else {
        removeFixedFilterPosition();
    }

    if (scrollDistance >= (filtersOffsetTop - smallOffset) + (filters.offsetHeight - fixedBlock.offsetHeight)) {
        removeFixedFilterPosition();
        fixedBlock.classList.add('absolute-filters');
    }
}

const setFixedFilterPosition = () => {
    fixedBlock.classList.add('fixed-filters');
    fixedBlock.style.left = `${offsetLeft}px`;
    fixedBlock.style.width = `${filtersWidth}px`;
}

const removeFixedFilterPosition = () => {
    fixedBlock.style.left = `0px`;
    fixedBlock.classList.remove('fixed-filters');
    fixedBlock.style.width = `100%`;
}

window.addEventListener('scroll', fixBlockOnScroll);

