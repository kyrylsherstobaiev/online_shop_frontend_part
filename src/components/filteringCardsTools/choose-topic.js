import listOfFoxes from "../../app";
import renderCardsPage from "../cardsPage/render-cards";

function handleTopicClick(e) {
    if (e.target.dataset.topic === 'all') {
        renderCardsPage(listOfFoxes);
    } else {
        const filteredListFoxes = listOfFoxes.filter(item => {
            return item.topic === e.target.dataset.topic;
        })
        renderCardsPage(filteredListFoxes)
    }
}

export default handleTopicClick;