import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default async function findImage(key, text, imageType, orientation, safesearch, pageNumber) {
    const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${text}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}&page=${pageNumber}&per_page=12`);
    const searchResult = await response.json();
    if (searchResult.hits.length == 0) {
        Notify.info('Sorry, there are no images matching your search query. Please try again.');
    } else if (pageNumber === 1) {Notify.info(`Hooray! We found ${searchResult.totalHits} images.`);}
    return searchResult;
}

// https://pixabay.com/api/?key=33615803-a98e5e1974f174420a01d7a6e&q=yellow+flowers&image_type=photo?