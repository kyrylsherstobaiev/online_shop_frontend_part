import renderCardsPage from "../cardsPage/render-cards";
import listOfFoxes from "../../app";

function handleSearch(e) {
    e.preventDefault();
    // console.log(e.srcElement[0].value);

    for (const card of listOfFoxes) {
        if (card.name === e.srcElement[0].value) {
            const filteredCardsArray = listOfFoxes.filter(card => {
                return card.name === e.srcElement[0].value;
            });
            return renderCardsPage(filteredCardsArray);
        }
    }
    console.log('No matches!');
    return renderCardsPage(listOfFoxes);
}

export default handleSearch;