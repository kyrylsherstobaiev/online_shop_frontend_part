import increaseItems from "./increase-items";
import renderCart from "./renderCart";
import decreaseItems from "./decrease-items";
import removeItem from "./remove-item";

function handleBtnsActions(e) {
    const storage = JSON.parse(localStorage.getItem('cart'));

    if (e.target.closest('.card-item')) {

        const id = e.target.closest('.card-item').dataset.id;

        if (e.target.closest('.btn-plus')) {
            increaseItems(storage, id);
            renderCart(JSON.parse(localStorage.getItem('cart')));
        } else if (e.target.closest('.btn-minus')) {
            decreaseItems(storage, id);
            renderCart(JSON.parse(localStorage.getItem('cart')));
        } else if (e.target.closest('.remove-item')) {
            removeItem(storage, id);
            renderCart(JSON.parse(localStorage.getItem('cart')));
        } else {
            return false;
        }
    }
}

export default handleBtnsActions;