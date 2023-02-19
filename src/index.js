import findImage from "./js/findImage";
import createMarkup from "./js/createMarkUp";
import addMarkup from "./js/addMarkup";
import debounce from 'lodash.debounce';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const IPI_KEY = '33615803-a98e5e1974f174420a01d7a6e';
const imageType = 'photo';
const orientation = 'horizontal';
const safesearch = true;
let currentPage = 1;

const searchFormEl = document.getElementById('search-form');
const searchContent = searchFormEl.querySelector('input');
const galleryDivEl = document.querySelector('.gallery')
searchFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    currentPage = 1;
    const userText = event.currentTarget.searchQuery.value.trim();
    const images = findImage(IPI_KEY, userText, imageType, orientation, safesearch, currentPage).then(result => createMarkup(result.hits, galleryDivEl)).then(res => {
        const { height: cardHeight } = galleryDivEl.getBoundingClientRect();
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
        tet.refresh();
    });
})  

//-------------------------------------------------------------------------------------------------------------------
window.addEventListener('scroll', debounce(() => {
    const documentRect = document.documentElement.getBoundingClientRect();
    if (documentRect.bottom < document.documentElement.clientHeight + 200) {
        currentPage +=1;
        const doubleImg = findImage(IPI_KEY, searchContent.value, imageType, orientation, safesearch, currentPage).then(result => {
            addMarkup(result.hits, galleryDivEl,)
            tet.refresh()
        });
    }
}, 90));
const tet =  new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
