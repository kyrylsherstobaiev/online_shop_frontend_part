function itemCardInCart(item) {
    return `
                    <div class="card-item" data-id=${item.id}>
                        <div class="description">
                            <div><img src=${item.image} alt="forest-fox"></div>
                            <p>${item.name} ${item['price']}$</p>
                        </div>
                        <div class="manipulation-card-item">
                            <div class="btns-qtydisplay">
                                <button class="btn-minus">-</button>
                                <p class="quantity-items">${item.qty}</p>
                                <button class="btn-plus">+</button>
                            </div>

                            <div class="remove-item">remove
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                    </div>
    `;
}

export default itemCardInCart;