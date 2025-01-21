const menu = document.querySelector('nav');
function handleDropMenuAndCart(e) {
    if (innerWidth <= 600 && e.target.closest('.wrapper-pages-list')) {
        // console.log(e.target);
        if (e.target === menu) {
            e.target.firstElementChild.style.display = 'block';
        } else if (e.target.closest('.close-window-menu-switcher')) {
            document.querySelector('.pages-list').style.display = 'none';
        } else {
            return false;
        }
    }

    if (e.target.closest('.close-window-aside')) {
        document.querySelector('.cart-wrapper-aside').style.display = 'none';
    } else if (e.target.closest('.cart_icon')) {
        document.querySelector('.cart-wrapper-aside').style.display = 'flex';
    } else {
        return false;
    }
}

export default handleDropMenuAndCart;