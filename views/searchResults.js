module.exports = function(props){
  return `
  ${props.Search
    .map(movie => {
    return `
      <div width="180px" style="display:inline-block;">
        <img height="250px" width="180px" src="${movie.Poster}" alt="${movie.Title} poster">
        <div style="width:180px; overflow-wrap: break-word;">${movie.Title} (${movie.Year})</div>
      </div>
    `
  }).join("")}
  `;
}
