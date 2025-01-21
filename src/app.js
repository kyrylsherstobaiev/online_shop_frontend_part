import './scss/style.scss';
import './img/main_img_1.png';
import './img/page_shop/forest1.png';
import './img/cock_top.png';
import './img/cock_bottom.png';
import './img/fox_bottom.png';
import './img/icons-footer/insta.png';
import './img/icons-footer/telegram 1.png';
import './img/icons-footer/twitter 1.png';
import './img/page_about/img_bottom_about.png';
import './img/page_about/img_top.png';
import './img/page_shop/forest1.png';
import './img/page_shop/forest2.png';
import './img/page_shop/forest3.png';
import './img/page_shop/office1.png';
import './img/page_shop/office2.png';
import './img/page_shop/office3.png';
import './img/page_shop/home1.png';
import './img/page_shop/home2.png';
import './img/page_shop/stars.png';
// import myData from './items.json';
import renderCardsPage from "./components/cardsPage/render-cards";
import handleSearch from "./components/filteringCardsTools/search-card";
import handleDropMenuAndCart from "./components/dropmenu-and-dropcart";
import handleTopicClick from "./components/filteringCardsTools/choose-topic";
import handleRangePrice from "./components/filteringCardsTools/range-price-fox";
import fetchData from "./components/fetch-data";
import displayAllCards from "./components/cardsPage/dispaly-all-cards";
import handleAddItemToCart from "./components/cardsPage/add-item-to-cart";
import renderCart from "./components/cart/renderCart";
import handleBtnsActions from "./components/cart/manage-btns-cart";
import makeTotalSum from "./components/cardsPage/make-total-sum";
import cartCounter from "./components/cart-counter/cart-counter";

const listOfFoxes = await fetchData();

const header = document.querySelector('.wrapper_header');
const formSearchCard = document.querySelector('form');
const listOfTopics = document.querySelector('.list-topics');
const rangePriceValue = document.querySelector('.range');
const allFoxesCards = document.querySelector('.allfoxes-cards');
const displayAllFoxes = document.querySelector('.wrapper-btn-choose-all');
const wrapperContainerCart = document.querySelector('.cards-wrapper-aside');

header.addEventListener('click', handleDropMenuAndCart);
wrapperContainerCart.addEventListener('click', handleBtnsActions);

if (document.getElementById('shop-page')) {

    renderCardsPage(listOfFoxes);

    formSearchCard.addEventListener('submit', handleSearch);
    listOfTopics.addEventListener('click', handleTopicClick);
    rangePriceValue.addEventListener('input', handleRangePrice);
    allFoxesCards.addEventListener('click', handleAddItemToCart);
    displayAllFoxes.addEventListener('click', displayAllCards);
}

if (JSON.parse(localStorage.getItem('cart'))) {
    renderCart(JSON.parse(localStorage.getItem('cart')));
    makeTotalSum(JSON.parse(localStorage.getItem('cart')));
    cartCounter(JSON.parse(localStorage.getItem('cart')));
}

export default listOfFoxes;


