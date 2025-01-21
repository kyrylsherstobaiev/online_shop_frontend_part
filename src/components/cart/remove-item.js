import makeTotalSum from "../cardsPage/make-total-sum";
import cartCounter from "../cart-counter/cart-counter";

function removeItem(storage, id) {
    const updatedList = storage.filter(item => item.id !== id);
    makeTotalSum(updatedList);
    cartCounter(updatedList);
    localStorage.setItem('cart', JSON.stringify(updatedList));
}

export default removeItem;