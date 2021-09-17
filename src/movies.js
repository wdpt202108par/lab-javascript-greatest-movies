// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(films) {
  let result = films.map(function(el){
    return el.director;
  })

  return result

  console.log(result);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
  const findDrama = movies.filter(function(el){
  return el.director === 'Steven Spielberg' && el.genre.indexOf('Drama') != -1;
  })
  return findDrama.length
  console.log(findDrama.length);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// .toFixed() doesnt work.


function scoresAverage(movies){
  sum = movies.reduce(function(acc, el){
    if(movies.length <= 0){
      return 0;
    }else if(el.scroe == 0 || acc.score == 0){ // it's not working....
      return acc + el.score;
    }else{
      return (acc + el.score / movies.length);
    }
}, 0)
return (Number(sum.toFixed(2)));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
// .toFixed() doesnt work.
function dramaMoviesScore(movies) {
  const dramaScore = movies.filter(function(el){
  return el.genre.includes("Drama")
    })
    return scoresAverage(dramaScore);
   // return ((acc + el.score / movies.length) * 100) /100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let result = movies.map(function(el){
    return el.year;
  })
  let sorted_year = result.sort(function(a, b){
return a - b;
  })
  return sorted_year;
  console.log(sorted_year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
  let result = movies.map(function(el){
    return el.title;
  })
 sorted_year = result.sort(function (a, b){
    if(a.title < b.title){
      return -1; 
    }else if(a.title > b.title){
    return 1; 
  }else
    return 0;
  })
  return sorted_year.splice(0,20);
}

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
