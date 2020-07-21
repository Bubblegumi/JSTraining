const numberOfFilms = +prompt ('How many movies you have watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Last movie you watched?', ''),
        b = prompt('Rate a movie?', '');
    if (a != null && b !=null && a != '' && b != ''&& a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }

}
if (personalMovieDB.count < 10) {
    console.log('Noob');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Great job');
} else if (personalMovieDB.count >= 30) {
    console.log('Pro');
} else {
    console.log('Error');
}
console.log(personalMovieDB);