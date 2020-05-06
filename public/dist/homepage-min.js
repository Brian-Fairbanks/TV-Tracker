appenddata();function getTrending(){return $.ajax({url:"/api/user/trending/12",type:"GET"})}async function appenddata(){const a=await getTrending();$("#trending").empty(),a.forEach(a=>{var b=`<div class="w-1/3 mb-5 px-2">
    <h2>
    <a href="/content/${a.name}-${a.imdbID}">
    <img src="${"N/A"!==a.poster&&null!==a.poster?a.poster:"/assets/poster1.png"}" alt="${a.name}" style="width: 150px;" class="m-auto text-center">${a.name}
    </a>
    </h2>
    </div>`;$("#trending").append(b)})}