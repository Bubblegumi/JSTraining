const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        'Logan',
        'League of justice',
        'Addiction',
        'La la land',
        'Scott Loxter',
    ]
};

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Drama';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML ="";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film};
        <div class="delete"></div>
    </li>
    `;
});