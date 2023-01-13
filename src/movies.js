// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((x) => x.director);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].director.toUpperCase() === 'STEVEN SPIELBERG' && (moviesArray[i].genre.includes('DRAMA') ||
                                                                         moviesArray[i].genre.includes('drama') ||
                                                                         moviesArray[i].genre.includes('Drama'))) {
      count++;
    };
  };
  return count;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  };

  let sum = 0;
  let count = 0;

  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].score !== undefined && moviesArray[i].score !== null) {
      sum += moviesArray[i].score;
      count++;
    }else{
      count++;
    };
  };
  const average = Math.round(sum / count * 100) / 100;
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  };
    
  let sum = 0;
  let count = 0;
    
  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].score !== undefined && moviesArray[i].score !== null && (moviesArray[i].genre.includes('DRAMA') ||
                                                                                moviesArray[i].genre.includes('drama') ||
                                                                                moviesArray[i].genre.includes('Drama'))) {
      sum += moviesArray[i].score;
      count++;
    }else if (moviesArray[i].genre.includes('DRAMA') ||
              moviesArray[i].genre.includes('drama') ||
              moviesArray[i].genre.includes('Drama')) {
      count++;
    };
  };

  if (count === 0) {
    return 0;
  };

  const average = Math.round(sum / count * 100) / 100;
  return average;
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
