// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(films) {
  var directors = films.map(function(directorsList) {
    return directorsList.director;
  })
  return directors
};

console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(films) {
  const spielbergMovies = films.filter(function (moviesSpielbergDrama){
    return moviesSpielbergDrama.director==='Steven Spielberg' && moviesSpielbergDrama.genre.includes(`Drama`);
  })
  return spielbergMovies
};

console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesScore) {
  const avgScores = moviesScore.reduce(function(avg, score2) {
    return avg + (score2.score)/moviesScore.length
  },0)
  return avgScores.toFixed(2)                                  
};

console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(bestDrama) {
  const onlyDrama = bestDrama.filter(function (moviesDrama){
    return moviesDrama.genre.includes(`Drama`)
  },0);
  const avgDramaScore = onlyDrama.reduce(function(avg, score2) {
    return avg + (score2.score)/onlyDrama.length
  },0);
  return avgDramaScore.toFixed(2)  
};

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesReleaseDate) {
  const movieYear = moviesReleaseDate.sort(function (a, b) {
  return a.year - b.year
  });
  return movieYear
};

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesTitle) {
  const alphaOrder = moviesTitle.sort(function (a, b ) {
    if ( a.title < b.title ){
    return -1;
    }
    if ( a.title > b.title ){
    return 1;
    }
    return 0;
    });
  return alphaOrder.slice(0,20)
};

console.log(orderAlphabetically(movies))

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
