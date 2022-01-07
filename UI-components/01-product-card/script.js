const products = document.querySelectorAll('.product-card');

if (products) {
    products.forEach(product => {
        let currentProduct = product;
        const imageSwitchItems = product.querySelectorAll('.image_switch-item');
        const imagePagination = product.querySelector('.product__image-pagination');

        if (imageSwitchItems.length > 1) {
            imageSwitchItems.forEach((item, itemIndex) => {
                item.setAttribute('data-index', itemIndex);

                imagePagination.innerHTML += `<li class="product__image-pagination--item ${itemIndex === 0 ? 'active' : ''}" data-index="${itemIndex}"></li>`;

                item.addEventListener('mouseenter', () => {
                    currentProduct.querySelectorAll('.product__image-pagination--item').forEach(el => {
                        el.classList.remove('active');
                    });
                    currentProduct.querySelector(`.product__image-pagination--item[data-index="${itemIndex}"]`).classList.add('active');
                });

                item.addEventListener('mouseleave', () => {
                    currentProduct.querySelectorAll('.product__image-pagination--item').forEach(el => {
                        el.classList.remove('active');
                    });
                    currentProduct.querySelector(`.product__image-pagination--item[data-index="0"]`).classList.add('active');
                });
            });
        }
    })
}