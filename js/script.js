const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies you have watched?', '');
    
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('How many movies you have watched?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    personalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Noob');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Great job');
        } else if (personalMovieDB.count >= 30) {
            console.log('Pro');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favourite genre ${i}`);
            if (genre === '' || genre === null) {
                console.log('not correct answer');
                i--;
            } else {
                personalMovieDB.geners[i - 1] = genre;
            }
        }
        personalMovieDB.geners.forEach ((item, i) => {
            console.log(`Favourite genre ${i + 1} - is ${item}`);
        });
    }
};





