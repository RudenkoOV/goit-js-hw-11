export default function createMarkup(imagesObject, searchFormEl) {
    console.log(imagesObject);
    const markUp = imagesObject.reduce((acc, object) => {
    return  acc + `
    <div class="photo-card">
    <img src="${object.largeImageURL}" alt="" loading="lazy" width=400px />
        <div class="info">
            <p class="info-item">
                <b>${object.likes}</b>
            </p>
            <p class="info-item">
                <b>${object.views}</b>
            </p>
            <p class="info-item">
                <b>${object.comments}</b>
            </p>
            <p class="info-item">
                <b>${object.downloads}</b>
            </p>
        </div>
    </div>`}
    , '');
    searchFormEl.innerHTML = markUp;
}
