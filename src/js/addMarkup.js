export default async function addMarkup(imagesObject, searchFormEl) {
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
    searchFormEl.insertAdjacentHTML('beforeend', markUp);
}


