import makeTotalSum from "../cardsPage/make-total-sum";
import cartCounter from "../cart-counter/cart-counter";

function decreaseItems(storage, id) {
    const updatedList = storage
        .map(item => {
            if (item.id === id) {
                item.qty--;
                item.sum = item['price'] * item.qty;
            }
            return item;
        })
        .filter(item => item.qty !== 0);

    localStorage.setItem('cart', JSON.stringify(updatedList));
    makeTotalSum(updatedList);
    cartCounter(updatedList);
}

export default decreaseItems;