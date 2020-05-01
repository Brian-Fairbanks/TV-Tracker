module.exports = function() {
  return `
    <div id="movies-title" class="mt-8 overflow-x-auto w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex flex-row justify-between"></div>


    <div class="flex-auto flex flex-col content-center justify-center mt-8">
        <div class="w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-start py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white">

            <h2 id="movie-hide" class="pl-5 hover:text-teal-200 cursor-pointer">Movies &#8597;</h2>
        </div>
        
        <div id="movies">
        </div>

    </div>

    <div class="flex-auto flex flex-col content-center justify-center mt-8">
        <div class="w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-start py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white">

            <h2 id="show-hide" class="pl-5 hover:text-teal-200 cursor-pointer">Shows &#8597;</h2>
        </div>

        <div id="shows">
        </div>

    </div>

    <script type="text/javascript" src="./js/getwatchlist.js"></script>
    <script type="text/javascript" src="./js/userscript.js"></script>
    <script type="text/javascript" src="./js/login.js"></script>`;
};
