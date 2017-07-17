var movies = [
   {
      title: "1+1",
      hasWatched: true,
      rating: 10
   },
   {
      title: "Suits",
      hasWatched: true,
      rating: 9
   },
   {
      title: "Suits",
      hasWatched: false,
      rating: 9
   }
]


function buildString(movie) {
   var result = "I have";
   if (movie.hasWatched) {
      result += (" watched the movie ");
   }
   else {
      result += (" not watched the movie ");
   }
   result += movie.title;
   result += (". In my opinion its rating should be ");
   result += movie.rating;
   return result;
}

movies.forEach(function(movie) {
   console.log(buildString(movie));
});
