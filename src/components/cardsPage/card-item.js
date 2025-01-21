function cardItemPage(item) {
    return `
                <div class="card" data-id=${item.id} data-topic=${item.topic}>
                    <div class="card-img">
                        <div class="img-wrapper">
                            <img src=${item.image} alt="for1">
                        </div>
                        <div class="btn-add-tocard">
                            <p>add+</p>
                        </div>
                    </div>
                    <div class="card-info">
                        <div class="fox-name">${item.name}</div>
                        <div class="fox-price">$${item.price}</div>
                        <div class="fox-grade"><img src="./img/page_shop/stars.png" alt="stars"></div>
                        <div class="fox-topic">#${item.topic}</div>
                    </div>
                </div>
    `;
}

export default cardItemPage;