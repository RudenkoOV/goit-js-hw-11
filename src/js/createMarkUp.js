import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function createMarkup(imagesObject, searchFormEl) {
    // Notify.info(`Hooray! We found ${imagesObject.totalHits} images.`)
    console.log(imagesObject);
    const markUp = imagesObject.reduce((acc, object) => {
    return  acc + `
    <div class="photo-card">
    <a class="gallery__image" href="${object.largeImageURL}">
    <img src="${object.webformatURL}" alt="${object.tags}" loading="lazy" width=300px class="gallery__image"/>
        <div class="info">
            <p class="info-item">
                <a><b>Likes</b></a>
                <a>${object.likes}</a>
            </p>
            <p class="info-item">
             <a><b>Views</b></a>
            <a>${object.views}</a>
            </p>
            <p class="info-item">
            <a><b>Comments</b></a>
            <a>${object.comments}</a>
            </p>
            <p class="info-item">
            <a><b>Downloads</b></a>
            <a>${object.downloads}</a>
            </p>
        </div>
        </a>
    </div>`}
        , '');
    searchFormEl.innerHTML = markUp;
    new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });  
}
