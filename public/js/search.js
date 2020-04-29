// alert("working");
$(document).ready(function() {
  var userSearch = $("#search-bar");
  var userData = $("#search-box");

  userSearch.on("submit", function(event) {
    event.preventDefault();
    $.get("/api/search/" + userData.val().trim()).then(function(props) {
      $("#movies-title").html(
        props.Search.map(movie => {
          return `
                      <div width="180px" style="display:inline-block;">
                        <img height="250px" width="180px" src="${movie.Poster}" alt="${movie.Title} poster">
                        <div style="width:180px; overflow-wrap: break-word;">${movie.Title} (${movie.Year})</div>
                      </div>
                    `;
        }).join("")
      );
      //   $(".member-name").text(data.email);
      // console.log(data);
    });
  });
});
