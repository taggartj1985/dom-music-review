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

  const artist = document.createElement('h2');
  artist.textContent = form.artist.value;
  albumListItem.appendChild(artist);

  const album = document.createElement('h3');
  album.textContent = form.album.value;
  albumListItem.appendChild(album);

  const genre = document.createElement('p');
  genre.textContent = form.category.value;
  albumListItem.appendChild(genre);
  
  const rating = document.createElement('p');
  rating.textContent = form.rating.value;
  albumListItem.appendChild(rating);

  return albumListItem;
}
