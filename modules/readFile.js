let jokesArray = [];

function loadJokes(callback) {
  $.get('resources/jokes.csv', function(csvData) {
    jokesArray = $.csv.toArrays(csvData);   
    // jokesArray holds the contents of jokes.csv as a 2D array
    callback(jokesArray); // Triggers when data is ready
  });
}

loadJokes((loadedJokes) => {
  // console.log(loadedJokes); 
});
