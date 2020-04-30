var moviesActive = false;
document.getElementById("movie-hide").addEventListener("click", function() {
  moviesActive = !moviesActive;
  if (moviesActive) {
    document
      .querySelectorAll(".movie")
      .forEach(item => item.classList.add("hidden"));
  } else {
    document
      .querySelectorAll(".movie")
      .forEach(item => item.classList.remove("hidden"));
  }
});

var showsActive = false;
document.getElementById("show-hide").addEventListener("click", function() {
  showsActive = !showsActive;
  if (showsActive) {
    document
      .querySelectorAll(".show")
      .forEach(item => item.classList.add("hidden"));
  } else {
    document
      .querySelectorAll(".show")
      .forEach(item => item.classList.remove("hidden"));
  }
});
