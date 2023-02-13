export default async function findImage (key, text, imageType, orientation, safesearch) {
    const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${text}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}`);
    return await response.json();
}

// https://pixabay.com/api/?key=33615803-a98e5e1974f174420a01d7a6e&q=yellow+flowers&image_type=photo?