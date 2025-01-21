import listOfFoxes from "../../app";
import increaseItems from "../cart/increase-items";
import renderCart from "../cart/renderCart";
import makeTotalSum from "./make-total-sum";
import cartCounter from "../cart-counter/cart-counter";

function handleAddItemToCart(e) {
    const btnClick = e.target.closest('.btn-add-tocard');

    if (!btnClick) {
        return false;
    }

    const cardId = e.target.closest('.btn-add-tocard').closest('.card').dataset.id;

    const findItem = listOfFoxes.find(item => item.id === cardId);

    if (JSON.parse(localStorage.getItem('cart'))) {

        let updatedCartList = [...JSON.parse(localStorage.getItem('cart'))];

        const existedItem = updatedCartList.some(item => item.id === cardId);

        if (existedItem) {
            increaseItems(updatedCartList, cardId);
        } else {
            updatedCartList.push(
                {...findItem, qty: 1, sum: Number(findItem['price'])}
            );
            localStorage.setItem("cart", JSON.stringify(updatedCartList));
        }

    } else {
        localStorage.setItem("cart", JSON.stringify(
            [{...findItem, qty: 1, sum: Number(findItem['price'])}]
        ));
    }

    renderCart(JSON.parse(localStorage.getItem('cart')));
    makeTotalSum(JSON.parse(localStorage.getItem('cart')));
    cartCounter(JSON.parse(localStorage.getItem('cart')));
}

export default handleAddItemToCart;