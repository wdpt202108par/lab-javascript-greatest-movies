// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
	var allDirectors = movies.map(function(movie) {
	  return movie.director;
}) 
  let uniqueDirectors = [];
  for (let director of allDirectors) {
		if (!uniqueDirectors.includes(director)) {
			uniqueDirectors.push(director)
		} 
	}
	return uniqueDirectors 
}

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  var dramaSpielberg = movies.filter(function(categorie){
    return  categorie.genre.includes('Drama') && categorie.director === 'Steven Spielberg';
  })
  return dramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let filmWithScore = movies.filter(function (film) {
    return film.score !== undefined;
  });
  let resultScoresAverage = filmWithScore.reduce(function (sum, film) {
    return sum + film.score; 
  }, 0);
  return Math.round((resultScoresAverage/ movies.length) * 100)/100;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  var dramaMovies = movies.filter(function(categorie) {
    return categorie.genre.includes("Drama");
  });
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  var moviesByYear = movies.map (function(film) {
    return film
  });
  let sortByYear = moviesByYear.sort(function(a, b) {
    if (a.year<b.year) {
      return -1
    } else if (b.year<a.year) {
      return 1
    } else {
      if (a.title<b.title) {
        return -1
      } else if (b.title<a.title) {
        return 1
      } else {
        return 0
      }
   }
  });
 return sortByYear;
}

/*autre solution plus poussée est de trier à la fois sur le titre et l'année:
function orderByYear(movies) {
  var moviesByYear = movies.map (function(film) {
    return film
  });
  let keya = `${a.year} ${a.title}`;
  let keyb = `${b.year} ${b.title}`;
  if (keya<keyb) {
    return -1
  } else if (keyb<keya) {
    return 1
  } else {
    return 0
  };
 return sortByYear;
}
console.log(orderByYear(movies));*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var moviesArray = movies.map (function(list) {
    return list.title
  });
  let moviesByTitle = moviesArray.sort(function(a, b) {
    if (a<b) {
      return -1
    } else if (b<a) {
      return 1
    } else {
      return 0
    }
  });
  return moviesByTitle.splice(0,20);
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
