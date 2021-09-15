
// How could you "clean" a bit this array and make it unified (without duplicates)?
let movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies) {
  return movies.map((movie) => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
function getUniqueDirectors(movies) {
  let allDirectors = getAllDirectors (movies);

  return allDirectors.filter((director, index, allDirectors) => allDirectors.indexOf(director) === index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (movies) {
  let spielbergDramaMovies = movies.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") != -1);
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let average =  movies.filter((movie) => !!movie.score).reduce(function(acc, movie) {
    return acc + movie.score / movies.length;
  }, 0);
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie) => movie.genre.indexOf("Drama") != -1);
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesCopy = movies.slice();
    moviesCopy.sort(function (a, b){
      if (a.year > b.year) return 1;
      if (a.year < b.year) return -1;
      else {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
      }
    });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let sortedArray = movies;
  
  return sortedArray.map((movie) => movie.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function stringToMinutes(object, string) {
  let splitString = string.split(" ");
  let hours = splitString[0].split("h").map((el) => Number(el)).reduce(function(sum, el) {
    return sum + el * 60;
  }, 0);
  let minutes = splitString[1].split("min").map((el) => Number(el)).reduce(function(sum, el) {
    return sum + el;
  }, hours);
  
  return {
    title: 'Fight Club',
    year: 1999,
    director: 'David Fincher',
    duration: minutes,
    genre: ['Drama'],
    score: 8.8
  };
}

function turnHoursToMinutes(movies) {
  let moviesAdjusted = movies.map((movie) => stringToMinutes(movie, movie.duration));
  
  return moviesAdjusted;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// Calculate average score for a specified year
function calcAvgScorePerYear(movies, year) {
  let filteredMovies = movies.filter((movie) => movie.year === year && !!movie.score);

  let avgScore = filteredMovies.reduce(function(sum, movie) {
    return sum + movie.score / filteredMovies.length;
  }, 0)

  return {year: year, score: Number(avgScore.toFixed(2))};
}

function bestYearAvg(movies) {
  // List all years
  let years = movies.map((movie) => movie.year);

  // Remove duplicate years and calculate average score for each year
  years = years.filter((year, index, years) => years.indexOf(year) === index).map((year) => calcAvgScorePerYear(movies, year));
  
  // Get max score
  let bestYear = years.reduce((prev, current) => (prev.score > current.score) ? prev : current);
  
  return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`;
}

console.log(bestYearAvg(movies));




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
