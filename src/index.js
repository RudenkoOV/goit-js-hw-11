import findImage from "./js/findImage";
import createMarkup from "./js/createMarkUp";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const IPI_KEY = '33615803-a98e5e1974f174420a01d7a6e';
const imageType = 'photo';
const orientation = 'horizontal';
const safesearch = true;

const searchFormEl = document.getElementById('search-form');
const galleryDivEl = document.querySelector('.gallery')
searchFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const userText = event.currentTarget.searchQuery.value.trim();
    findImage(IPI_KEY, userText, imageType, orientation, safesearch).then(result => createMarkup(result.hits, galleryDivEl));  
})




// console.log(result.hits)