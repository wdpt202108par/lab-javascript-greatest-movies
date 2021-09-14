const movies = require('../src/data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (movies){
var allDirectors = movies.map(function hello(array){
  return array.director;
});
return allDirectors;
}

console.log(allDirectors)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
var movies3 = movies.filter(function(movie) {
  return movie.director === "Steven Spielberg" &&
  movie.genre.includes('Drama');
  });
return movies3;}
  
console.log(movies3)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
var average = movies.reduce(function(sum, scores){
  return sum + scores.score/250;
  }, 0);
  return average.toFixed(2);
 }

console.log(average)

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(dramaScore) {
  var dramamovie = dramaScore.filter(function (film){
    return film.genre.includes(`Drama`)
  },0);
 
  var averageScore = dramamovie.reduce(function(avg, scores) {
    return avg + (scores.score)/dramamovie.length
  },0);
  return averageScore.toFixed(2)
};

console.log(dramaMoviesScore(movies))

//test Iteration 4 avec un reduce

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(date) {
  const yearRelease = date.sort(function (a, b) {
  return a.year - b.year
  });
  return yearRelease;
};

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
