// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors (movies) {
  const directorArray = movies.map (function (movie) {
    return movie.director
  })
  return directorArray
}


/*Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array 
so we can have only the drama movies where Steven Spielberg is the director.*/
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  var filterArray = movies.filter(function (movie) {
    return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  }
                                 )
                                 if (movies.length === 0){
                                   return 0};
                                   return filterArray.length
  
                                 }




// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) { 
  
  // Prevent invalid array -should return 0 if an empty array is passed-
  if (movies.length === 0) {
  
    return 0;
  
  } else {
    
    // Sum grades of all movies included in the array with the Reduce Method

    let total = movies.reduce((acc, movie) => {
      
      if(movie.score) {

        return acc + movie.score;
      
      } else {
        
        return acc;
      
      }
    }, 0);

    // Calculate average
    return +((total / movies.length).toFixed(2));
  }}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  
  // Check validity of the array
  if (!movies.length) {
  
    return 0;
  
  } else {
  
    // Set Drama Movies array with filter method, and includes method -mdn-
    let dramaMovies = movies.filter((movie) =>
      movie.genre.includes('Drama')
    );
  
    // Call previous function Score Average applied to Drama Movies
    return scoresAverage(dramaMovies);
  }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  // Initiate new array to store only movies titles
  let titles = movies.map(function (movie) {
    return movie.title
  });

  // Apply sort method for each element of the array
  titles.sort(function (a, b) {
                 
    //Return sorted values using localCompare Method -MDN- in order to get A to Z sorted list @Najia do you see an easiest way ?
    return a.localeCompare(b);
  });

  // Apply splice method to get the first 20 values
  let _20FirstArr = titles.splice(0, 20);

  return _20FirstArr;
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
