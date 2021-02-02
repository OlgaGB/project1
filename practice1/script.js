let numberOfFilms = +prompt ("Сколько фильмов вы уже смотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders:[],
    privat: false
};

const a = prompt('Один из просмотренных вами фильмов', ''),
    b = prompt('На сколько оцените его', ''),
    c = prompt('Один из просмотренных вами фильмов', ''),
    d = prompt('На сколько оцениваете его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);