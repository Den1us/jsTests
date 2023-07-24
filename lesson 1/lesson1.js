// 1. Створити змінну і помістити в неї відпровідь користувача на питання: "Скік фільмів вже подивився?"

// 2. Створити об'єкт personalMovieDB і в нього помістити такі параметри:
// - count - відповідь на 1 питання
// - movies - пустий об'єкт
// - actors - пустий об'єкт
// - genres - пустий масив
// - private - помістити в параметр boolean значення false

// 3. Задати 2 питання по 2 рази:
// "Останній фільм"
// "Ваща оцінка"
// Відповіді помістити в окремі змінні
// Записати відповіді в форматі
// movies : {
// 'logan:8.1'
// }

const numberOfFilms = +prompt("Скік фільмів вже подивився?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Останній фільм?", ''),
    b = prompt("Ваша оцінка", ''),
    c = prompt("Останній фільм?", ''),
    d = prompt("Ваша оцінка", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);