/* eslint-disable no-unused-vars */
function getWatchList() {
  return $.ajax({
    url: "/api/user/watchlist",
    type: "GET"
  });
}
