appenddata();

function getTrending() {
  return $.ajax({
    url: "/api/user/trending",
    type: "GET"
  });
}


async function appenddata() {
  const trending = await getTrending();

  $("#trending").empty();
  trending.forEach(item => {

    var htmlstring = `<div class="w-1/3 mb-5">
    <h2>
    <a href="/content/${item.name}-${item.imdbID}">
    <img src="${
      (item.poster !== "N/A" && item.poster !==null)?item.poster:"/assets/poster1.png"
    }" alt="${item.name}" style="width: 150px;" class="m-auto text-center">${item.name}
    </a>
    </h2>
    </div>`;
    $("#trending").append(htmlstring);

  });
}
