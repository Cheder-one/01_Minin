const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const dataContainer = document.querySelector('#data-container');

const getFastestLoadedPhoto = (ids) => {
    toggleLoader()
    Promise.race(ids.map((el) => fetch(`${PHOTOS_URL}/${el}`)))
        .then((responses) => {
            if (!responses.ok) {
                throw new Error('Ошибка запроса')
            }
            return responses.json()
            // Promise.all(responses
            //     .filter((response) => response.ok)
            //     .map((el) => el.json()))
        })
        .then((photos) => {
            // photos.forEach(el => {
            //     createPhotoHTMl(el.url, el.title);
            // });
            createPhotoHTMl(photos.url, photos.title)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() =>{
            toggleLoader()
        })
}

const loaderHTML = document.createElement('span');
loaderHTML.id = 'loader'
loaderHTML.setAttribute('hidden', '')
dataContainer.append(loaderHTML)
loaderHTML.innerText = 'Loading...'

function toggleLoader() {
    const isHidden = loaderHTML.hasAttribute('hidden')

    isHidden
      ? loaderHTML.removeAttribute('hidden') 
      : loaderHTML.setAttribute('hidden', '')
}

function createPhotoHTMl(url, text) {
    const photoItem = document.createElement('li');
    photoItem.className = 'photo-item'
    dataContainer.append(photoItem)

    const photoItemImage = document.createElement('img');
    photoItemImage.className = 'photo-item__image'
    photoItemImage.setAttribute('src', url)
    photoItem.append(photoItemImage)

    const photoItemTitle = document.createElement('h3');
    photoItemTitle.className = 'photo-item__title'
    photoItemTitle.innerText = text
    photoItem.append(photoItemTitle)
}

getFastestLoadedPhoto([60, 12, 55]);