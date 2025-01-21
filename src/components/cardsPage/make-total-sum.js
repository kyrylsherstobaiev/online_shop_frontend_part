function makeTotalSum(storage) {
    const summary = document.querySelector('.total-sum');

    summary.innerHTML = storage.reduce((acc, item) => {
        return acc + item.sum;
    }, 0);
}

export default makeTotalSum;