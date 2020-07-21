const numberOfFilms = +prompt ('How many movies you have watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};

const a = prompt('Last movie you watched?', ''),
    b = prompt('Rate a movie?', ''),
    c = prompt('Last movie you watched?', ''),
    d = prompt('Rate a movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);