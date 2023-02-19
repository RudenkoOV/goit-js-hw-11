import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default async function findImage(key, text, imageType, orientation, safesearch, pageNumber) {

        const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${text}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}&page=${pageNumber}&per_page=46`);
        const searchResult = await response.json();
        if (searchResult.hits.length == 0 && pageNumber === 1) {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        } else if (searchResult.hits.length == 0 && pageNumber > 1) {Notify.failure(`We're sorry, but you've reached the end of search results.`)}
            else if (pageNumber === 1) { Notify.info(`Hooray! We found ${searchResult.totalHits} images.`); } 
        return searchResult;

}