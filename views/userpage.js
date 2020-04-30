module.exports = function() {
    return `<div>
    <a href="/login"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">Logout</a>
    <a href="/signup"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0"></a>
    </div>
    </div>
    </nav>
    </header>
    <div class="flex-auto flex justify-center mt-8">
        <div class="w-full md:max-w-md sm:max-w-sm max-w-xs m-auto">
            <form id="search-bar">
                <input id="search-box" type="search" class="bg-purple-white shadow rounded border-0 p-3 w-full"
                    placeholder="Search Movies or TV Shows to add...">
            </form>
        </div>
    </div>

    <div id="movies" class="flex-auto flex flex-col content-center justify-center mt-8">
        <div class="w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-start py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white">

            <h2 id="movie-hide" class="pl-5 hover:text-teal-200 cursor-pointer">Movies &#8597;</h2>
        </div>
        <!-- The div below defines the row for displaying info for one result -->
        <div class="w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-around py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white movie">

            <h2 id="title"><img src="https://via.placeholder.com/100x150" alt="Movie poster"/>Movie Title</h2>
            <h2 id="genre">Movie Genre</h2>
            <h2 id="release-date">Release Date</h2>
            <h2 id="run-time">Run Time</h2>
            <h3 class="text-teal-200 hover:text-teal-500"><a href="#">More info...</a></h3>
        </div>
        <div class="w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-around py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white movie">

            <h2 id="title"><img src="https://via.placeholder.com/100x150" alt="Movie poster"/>Movie Title</h2>
            <h2 id="genre">Movie Genre</h2>
            <h2 id="release-date">Release Date</h2>
            <h2 id="run-time">Run Time</h2>
            <h3 class="text-teal-200 hover:text-teal-500"><a href="#">More info...</a></h3>
        </div>

    </div>

    <div id="shows" class="flex-auto flex flex-col content-center justify-center mt-8">
        <div class="w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-start py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white">

            <h2 id="show-hide" class="pl-5 hover:text-teal-200 cursor-pointer">Shows &#8597;</h2>
        </div>
        <!-- The div below defines the row for displaying info for one result -->
        <div class="w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-around py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white show">

            <h2 id="title"><img src="https://via.placeholder.com/100x150" alt="Movie poster"/>Show Title</h2>
            <h2 id="genre">Show Genre</h2>
            <h2 id="release-date">Release Date</h2>
            <h2 id="run-time">Run Time</h2>
            <h3 class="text-teal-200 hover:text-teal-500"><a href="#">More info...</a></h3>
        </div>
        <div class="w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-around py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white show">

            <h2 id="title"><img src="https://via.placeholder.com/100x150" alt="Movie poster"/>Show Title</h2>
            <h2 id="genre">Show Genre</h2>
            <h2 id="release-date">Release Date</h2>
            <h2 id="run-time">Run Time</h2>
            <h3 class="text-teal-200 hover:text-teal-500"><a href="#">More info...</a></h3>
        </div>

    </div>

    <footer>
        <div class="text-teal-200">Copyright</div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.0.js"
        integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./js/login.js"></script>
    <!-- <script type="text/javascript" src="./js/search.js"></script> -->
    <script type="text/javascript" src="./js/userscript.js"></script>`;
};
