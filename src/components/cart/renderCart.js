import itemCardInCart from "./item-card-inCart";

const containerOfCardsInCart = document.querySelector('.cards-wrapper-aside');

function renderCart(listItems) {

    const listOfDisplayedItems = listItems.map(item => {
        return itemCardInCart(item);
    });

    containerOfCardsInCart.innerHTML = listOfDisplayedItems.join('');
}

export default renderCart;