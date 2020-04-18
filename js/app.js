document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const albumListItem = createAlbumListItem(event.target);
  const albumList = document.querySelector('#album-list');
  albumList.appendChild(albumListItem);

  event.target.reset();
}

const createAlbumListItem = function (form) {
  const albumListItem = document.createElement('li');
  albumListItem.classList.add('album-list-item');

  const artist = document.createElement('h3');
  artist.textContent = form.artist.value;
  albumListItem.appendChild(artist);

  const album = document.createElement('h3');
  album.textContent = form.album.value;
  albumListItem.appendChild(album);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  albumListItem.appendChild(genre);

  const review = document.createElement('p');
  review.textContent = form.review.value;
  albumListItem.appendChild(review);

  return albumListItem;
}


const handleDeleteAllClick = function (event) {
  const albumList = document.querySelector('#album-list');
  albumList.innerHTML = '';
}

// document.addEventListener('DOMContentLoaded', () =>{
//
//   const newItemform = document.querySelector('#new-item-form');
//   newItemform.addEventListener('submit', handleNewItemFormSubmit);
//
//   const deleteAllButton = document.querySelector('#delete-all');
//   deleteAllButton.addEventListener('click', handleDeleteAllClick);
//
// })
//
// const handleNewItemFormSubmit = function (event) {
//   event.preventDefault();
//   const albumListItem = document.createElement('li');
//   albumListItem.classList.add('album-list-item');
//   albumListItem.innerHTML = `
//   <h3>${event.target.artist.value}</h3>
//   <h4>${event.target.album.value}</h4>
//    <p>${event.target.genre.value}</p>
//    <p>${event.target.review.value}</p>`
//   const list = document.querySelector('#album-list');
//   list.appendChild(albumListItem);
//   document.getElementById('#new-item-form').reset();
// }
//
// const handleDeleteAllClick = function (event) {
//   const albumList = document.querySelector('#album-list');
//   albumList.innerHTML = '';
// }
