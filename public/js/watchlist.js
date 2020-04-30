

$(document).load( function(){

  var watchButton = $("#addWatchlist");
  watchButton.on("click", handleWatchlistAdd);
  
});


function handleWatchlistAdd(event){
  const movieID = event.target().attr("data-movie-id");
  console.log("add"+movieID);

}