// alert("working");
$(document).ready(function () {
  var userSearch = $("#search-bar");
  var userData = $("#search-box");

  userSearch.on("submit", function (event) {
    event.preventDefault();
    $.get("/api/search/" + userData.val().trim()).then(function (props) {
      $("#movies-title").html(
        props.Search.map(movie => {
          return `
                      <div class="inline-block mx-8 flex-none mb-4">
                        <a href="/content/${movie.Title}">
                          <img style="height: 175px; max-width: 185px" class="m-auto" src="${movie.Poster}" alt="${movie.Title} poster">
                            <div style="max-height: 1.5em; max-width: 185px;" class="text-center text-white overflow-hidden">
                            ${movie.Title} (${movie.Year})</div>
                        </a>
                      </div>
                    `;
        }).join("")
      );
      //   $(".member-name").text(data.email);
      // console.log(data);
    });
  });
});
