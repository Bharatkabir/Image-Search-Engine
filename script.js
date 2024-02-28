const photosContainer = document.querySelector('.photos');
const searchInput = document.querySelector('.input')
const forms = document.querySelector('form');
// const img = document.querySelector('img');


forms.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    searchPhotos(searchTerm);
});

async function searchPhotos(searchTerm){
const API = `https://pixabay.com/api/?key=11493426-2cdb0244bb87550715119519b&q=${searchTerm}&image_type=photo&pretty=true`
try {
const response = await fetch(API)
const data = await response.json();
if (data.hits && data.hits.length > 0) {                                     
    displayImg(data.hits);
    console.log(data);
} else {
    console.log('No hits found for the search term:', searchTerm);
}
} catch(error) {
    console.error('Error fetching or parsing data:', error);
}
};

function displayImg(photos){
    photosContainer.innerHTML = '';
    photos.forEach((item)=>{
        const img = document.createElement('img');
        img.src = item.webformatURL;
        img.alt = item.tags;
        photosContainer.appendChild(img);
    })
}

