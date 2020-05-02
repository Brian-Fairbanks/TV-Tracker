module.exports = function() {
  return `<script src="https://kit.fontawesome.com/7a56207d34.js" crossorigin="anonymous"></script>

    <div id="movies-title" class="mt-8 overflow-x-auto w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex flex-row justify-between"></div>


    <div class="flex-auto flex flex-col content-center justify-center mt-8">
        <div class="rounded-lg rounded-b-none w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-start py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white">
            <h2 class="pl-5 pr-3">Movies</h2><i id="movie-arrow" class="fas fa-caret-square-up cursor-pointer"></i>
        </div>
        
        <div id="movies">
        </div>

    </div>

    <div class="flex-auto flex flex-col content-center justify-center mt-8">
        <div class="rounded-lg rounded-b-none w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-start py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white">
            <h2 class="pl-5 pr-3">Shows</h2><i id="show-arrow" class="fas fa-caret-square-up cursor-pointer"></i>
        </div>

        <div id="shows">
        </div>

    </div>

    <script type="text/javascript" src="./js/getwatchlist.js"></script>
    <script type="text/javascript" src="./js/userscript.js"></script>
    <script type="text/javascript" src="./js/login.js"></script>`;
};
