let numberOfFilms = +prompt ("Сколько фильмов вы уже смотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders:[],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных вами фильмов', ''),
        b = prompt('На сколько оцените его', '');

        if (a != null && b != null && a != '' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log ('да!');
        } else {
            console.log('error');
            i--;
        }
     
}

if (personalMovieDB.count < 10 ) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

