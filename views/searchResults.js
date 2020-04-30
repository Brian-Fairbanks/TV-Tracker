module.exports = function(props) {
  return `
  ${props.Search.map(movie => {
    return `
      <div class="inline-block mx-8">
        <img height="150px" src="${movie.Poster}" alt="${movie.Title} poster">
        <div style="overflow-wrap: break-word;">${movie.Title} (${movie.Year})</div>
      </div>
    `;
  }).join("")}
  `;
};
