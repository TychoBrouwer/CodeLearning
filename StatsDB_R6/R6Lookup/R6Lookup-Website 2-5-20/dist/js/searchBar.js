//							OPEN AND CLOSE SEARCHBAR
const search = document.querySelector('.search');
const searchBar = document.querySelector('.search-bar');
const searchClose = document.querySelector('.close-search-bar');

search.addEventListener('click', () => {
    searchBar.classList.toggle('hide-search-bar');
    search.classList.toggle('hide-search-bar');
    searchClose.classList.toggle('hide-search-bar')
});

searchClose.addEventListener('click', () => {
    searchBar.classList.toggle('hide-search-bar');
    search.classList.toggle('hide-search-bar');
    searchClose.classList.toggle('hide-search-bar');
});
