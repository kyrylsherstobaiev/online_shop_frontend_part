const counterContainer = document.querySelector('.counter-items');

function cartCounter(storage) {

    if (storage.length > 0) {
        counterContainer.style.display = 'flex';
        counterContainer.innerHTML = storage.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
    } else {
        counterContainer.style.display = 'none';
    }
}

export default cartCounter;