// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map(function(film) {
    return film.director
  });
  let directorsCleaned = [];
  for (let director of directors) {
    if (directorsCleaned.includes(director)) {
      continue;
    }
    else {
      directorsCleaned.push(director);
    }
  }
  return directorsCleaned;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let bestDramaSteven = movies.filter(function(film) {
      return (film.director === "Steven Spielberg") && (film.genre.includes('Drama'))
  });
return bestDramaSteven.length;
  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let totalSum = movies.reduce(function (acc, film) {
      if (isNaN(film.score)) {
          return Number(acc) + 0
      }
      return Number(acc) + Number(film.score);
  }, 0);
  
  let avrgScore = totalSum/movies.length;
  return Number(avrgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length === 0) {return 0};
  movies.sort(function (filmEl1, filmEl2) {
    if (filmEl1.year < filmEl2.year ) {return -1};
    if (filmEl1.year > filmEl2.year)  {return 1};
    if (filmEl1.year === filmEl2.year && filmEl1.title < filmEl2.title)  { return -1};
    return 1;
  });
  return movies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newList = movies.map(function (film) {
      let indexHours = film.duration.indexOf("h");
      let indexMinutes = film.duration.indexOf("min");
      let newFilmObject = {
          title: film.title,
          year: film.year,
          director: film.director,

      };
      if (indexHours !== -1 && indexMinutes !== -1) {
          let minutesFromHours = Number(film.duration.slice(0, indexHours)) * 60;
          let minutesFromMinutes = Number(film.duration.slice(indexMinutes - 2, indexMinutes)); 
          newFilmObject.duration = minutesFromHours + minutesFromMinutes;
          newFilmObject.genre = film.genre;
          newFilmObject.score = film.score;
          return newFilmObject
      }
      else if (indexHours === -1) {
          let minutesFromMinutes = Number(film.duration.slice(indexMinutes - 2, indexMinutes));
          newFilmObject.duration = minutesFromMinutes;
          newFilmObject.genre = film.genre;
          newFilmObject.score = film.score;
          return newFilmObject
      }
      else if (indexMinutes === -1){
          let minutesFromHours = Number(film.duration.slice(0, indexHours)) * 60;
          newFilmObject.duration = minutesFromHours;
          newFilmObject.genre = film.genre;
          newFilmObject.score = film.score;
          return newFilmObject
      }
      else {
          newFilmObject.duration = 0;
          newFilmObject.genre = film.genre;
          newFilmObject.score = film.score;
          return newFilmObject
      }
   });
   //adding the rest of the elements in the newFilmObject
   return newList;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {return null};
  //contains an array with years, the index of the year will be the same as the same
  //index as the year element in the next array called allYears.
  let yearIndexArray = [];
  //array to contain elemnts of years and scores
  let allYears = [];

  for (let i = 0; i < movies.length; i++) {
      let year = yearIndexArray.indexOf(movies[i].year);
      let yearlyScores = {};
      if (year === -1) {
          yearIndexArray.push(movies[i].year);
          yearlyScores.year = movies[i].year;
          yearlyScores.scores = [movies[i].score];
          allYears.push(yearlyScores);        }
      else if (year !== -1) {
          // console.log(year);
          allYears[year].scores.push(movies[i].score);
      }
  }
  // get the averages of all per year
  for (let year of allYears) {
      let totalSum = year.scores.reduce(function (acc, score) {
          if (isNaN(score)) {
              return Number(acc) + 0
          }
          return Number(acc) + Number(score);
      });
      
      let avrgScore = totalSum/year.scores.length;
      year.avgScores = Number(avrgScore.toFixed(2));
  }
  //getting the year with the highest score
  allYears.sort(function (filmEl1, filmEl2) {
      if (filmEl1.avgScores < filmEl2.avgScores ) {return -1};
      if (filmEl1.avgScores > filmEl2.avgScores)  {return 1};
      if (filmEl1.avgScores === filmEl2.avgScores)  { return 0};
    });
  return `The best year was ${allYears[allYears.length - 1].year} with an average score of ${allYears[allYears.length - 1].avgScores}`;
}



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
