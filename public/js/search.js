// alert("working");
$(document).ready(function () {
  var userSearch = $("#search-bar");
  var userData = $("#search-box");
  var curSearch = 1;
  var curMax = -1;
  var lastSearch = "";


  function runSearch(){
    const searchTerm = userData.val().trim();

    //check if new search
    if(lastSearch !== searchTerm){
      curSearch = 1;
      curMax = -1;
    }

    lastSearch = searchTerm;

    $.get("/api/search/" +searchTerm+"/"+curSearch).then(function (props) {
      curMax = props.totalResults;

      // reset the scrollbar on each search
      $("#movies-title").scrollLeft(0);

      if(curSearch > 1){$("#prevSearch").removeClass("opacity-25");}
      else{$("#prevSearch").addClass("opacity-25");}

      if(curSearch < curMax/10){$("#nextSearch").removeClass("opacity-25");}
      else{$("#nextSearch").addClass("opacity-25");}
      console.log(props);

      $("#searchResults").text(`Showing ${curSearch*10-9} - ${(curSearch*10 < curMax)?curSearch*10:curMax} of ${props.totalResults}`);
      $("#movies-title").html(
        props.Search.map(movie => {
          return `
                      <div class="inline-block mx-8 flex-none mb-4">
                        <a href="/content/${movie.Title}-${movie.imdbID}">
                          <img style="height: 175px; max-width: 185px" class="m-auto" src="${
  (movie.Poster !== "N/A" && movie.Poster !==null)?movie.Poster:"/assets/poster1.png"
}
                            " alt="${movie.Title} poster">
                            <div style="max-height: 1.5em; max-width: 185px;" class="text-center text-white overflow-hidden">
                            ${movie.Title} (${movie.Year})</div>
                        </a>
                      </div>
                    `;
        }).join("")
      );
      //   $(".member-name").text(data.email);
    });
  }

  userSearch.on("submit", function (event) {
    event.preventDefault();
    runSearch();
  });

  
  $("#nextSearch").on("click", function(){
    if (curSearch < curMax/10){
      curSearch+=1;
      runSearch();
    }
  });

  $("#prevSearch").on("click", function(){
    if (curSearch > 1){
      curSearch-=1;
      runSearch();
    }
  });

});
