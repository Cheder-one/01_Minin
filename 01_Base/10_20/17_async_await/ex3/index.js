// Данный код отличается от моего обычного написания, тк написанную работу я отправил на проверку нейросети, она сказала что it's fine. Но я спросил можно ли что-то улучшить. И в итоге, после разбора были внесены такие вот правки. 
// Стоит ли брать на вооружение?

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const ALBUM_CONTAINER_CLASS = 'data-container';
const LOADER_ID = 'loader';

const renderAlbums = async () => {
    try {
        toggleLoader();
        const response = await fetch(ALBUMS_URL);
        if (!response.ok) {
            throw new Error('Ошибка запроса пользователя');
        }
        const albumContainer = 
document.querySelector(`.${ALBUM_CONTAINER_CLASS}`);
        const albums = await response.json()     ;    
        albums.forEach((el) => {
            const albumEl = document.createElement('li');
            albumContainer.append(albumEl);
            albumEl.textContent = el.title;
        })
    } catch (error) {
        const albumContainer = 
document.querySelector(`.${ALBUM_CONTAINER_CLASS}`);
        albumContainer.textContent = 'Произошла ошибка в получении данных об альбомах...';
        console.log(error);
    }
    finally {
        toggleLoader();
    }
}

const renderLoader = () => {
    const loader = document.createElement('span');
    loader.id = LOADER_ID;
    loader.setAttribute('hidden', '');
    loader.textContent = 'Загрузка...';
    document.body.append(loader);
}

const renderAlbumContainer = () => {
    const albumContainer = document.createElement('ul');
    albumContainer.className = ALBUM_CONTAINER_CLASS;
    document.body.append(albumContainer);
}

const toggleLoader = () => {
    const loader = document.getElementById(LOADER_ID);
    const isHidden = loader.hasAttribute('hidden');

    isHidden 
      ?  loader.removeAttribute('hidden', '')
      :  loader.setAttribute('hidden', '')
}

renderLoader();
renderAlbumContainer();
renderAlbums();

//-------------Мой изначальный код-------------
// const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

// const renderAlbums = async () => {
//     try {
//         toggleLoader()
//         const response = await fetch(ALBUMS_URL)
//         if (!response.ok) {
//             throw new Error('Ошибка запроса пользователя')
//         }
//         const albums = await response.json()         
//         albums.forEach((el) => {
//             const albumEl = document.createElement('li');
//             albumContainer.append(albumEl)
//             albumEl.textContent = el.title
//         })
//     } catch (error) {
//         albumContainer.textContent = 'Произошла ошибка в получении данных об альбомах...'
//         console.log(error);
//     }
//     finally {
//         toggleLoader()
//     }
// }

// // render loader
// const loader = document.createElement('span')
// loader.id = 'loader'
// loader.setAttribute('hidden', '')
// loader.textContent = 'Загрузка...'
// document.body.append(loader)

// // render albumDataContainer
// const albumContainer = document.createElement('ul');
// albumContainer.className = 'data-container'
// document.body.append(albumContainer)

// const toggleLoader = () => {
//     const isHidden = loader.hasAttribute('hidden')

//     isHidden 
//       ?  loader.removeAttribute('hidden', '')
//       :  loader.setAttribute('hidden', '')
// }

// renderAlbums()