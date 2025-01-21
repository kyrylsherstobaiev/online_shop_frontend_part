import listOfFoxes from "../../app";
import renderCardsPage from "../cardsPage/render-cards";

const valueContainer = document.querySelector('.price-value span');
const rangePriceValue = document.querySelector('.range');

if (document.getElementById('shop-page')) {
    valueContainer.innerHTML = rangePriceValue.value;
}

function handleRangePrice(e) {
    valueContainer.innerHTML = e.target.value;
    const filteredListPriceFox = listOfFoxes.filter(item => {
        return Number(e.target.value) >= Number(item['price']);
    })
    renderCardsPage(filteredListPriceFox);
}


export default handleRangePrice;