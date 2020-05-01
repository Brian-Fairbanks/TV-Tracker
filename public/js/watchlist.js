$(document).ready( function(){

  var addButton = $("#addWatchlist");
  // var removeButton = $("#removeWatchlist");

  addButton.on("click", handleWatchlistAdd);
  // removeButton.on("click", handleWatchlistRemove);
  

});


function handleWatchlistAdd(){
  const movieID = $(this).attr("data-movie-id");
  $.ajax({
    url:"/api/user/watchlist",
    type:"POST",
    data:{movieID:movieID}
  })
    .then(function(response){
      console.log(response);
    });
}


function handleWatchlistRemove(){
  console.log(this);
  const movieID = $(this).attr("data-movie-id");
  $.ajax({
    url:"/api/user/watchlist",
    type:"DELETE",
    data:{movieID:movieID}
  })
    .then(function(response){
      console.log(response);
      getWatchList();
    });
}

$(document).on("click",".delete" , handleWatchlistRemove);
