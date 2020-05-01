$(document).ready(function () {

  var addButton = $("#addWatchlist");
  // var removeButton = $("#removeWatchlist");

  addButton.on("click", handleWatchlistAdd);
  // removeButton.on("click", handleWatchlistRemove);
  checkWatchList();

});

function handleWatchlistAdd() {
  const movieID = $(this).attr("data-movie-id");
  $.ajax({
    url: "/api/user/watchlist",
    type: "POST",
    data: { movieID: movieID }
  })
    .then(function (response) {
      console.log(response);
      checkWatchList();
    });
}


function handleWatchlistRemove() {
  console.log(this);
  const movieID = $(this).attr("data-movie-id");
  $.ajax({
    url: "/api/user/watchlist",
    type: "DELETE",
    data: { movieID: movieID }
  })
    .then(function (response) {
      console.log(response);
      checkWatchList();
    });
}

$(document).on("click", ".delete", handleWatchlistRemove);



async function checkWatchList() {
  const watchlist = await getWatchList();
  console.log(watchlist);
  console.log("===================");
  // console.log(watchlist.responseJSON);
  const imdbID = document.URL.split("-")[1];
  if (watchlist.find(content => content.imdbID === imdbID)) {
    console.log("in watchlist");
    $("#addWatchlist").hide();
    $("#removeWatchlist").show();
  }
  else {
    console.log("not in watchlist");
    $("#addWatchlist").show();
    $("#removeWatchlist").hide();
  }
}