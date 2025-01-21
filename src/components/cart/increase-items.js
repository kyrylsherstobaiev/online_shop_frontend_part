import makeTotalSum from "../cardsPage/make-total-sum";
import cartCounter from "../cart-counter/cart-counter";

function increaseItems(storage, id) {
    let storageUpdateFields = storage.map(e => {
        if (e.id === id) {
            e.qty++;
            e.sum = e.qty * e['price'];
        }
        return e;
    })
    localStorage.setItem("cart", JSON.stringify(storageUpdateFields));
    makeTotalSum(storageUpdateFields);
    cartCounter(storageUpdateFields);
}

export default increaseItems;