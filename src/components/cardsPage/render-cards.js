import cardItemPage from "./card-item";

const containerCards = document.querySelector('.cards');

function renderCardsPage(listData) {
    const dataCards = listData.map(item => {
        return cardItemPage(item);
    });

    containerCards.innerHTML = dataCards.join('');
}

export default renderCardsPage;