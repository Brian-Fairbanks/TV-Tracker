// The body here should include the login/logout button in the header as well

module.exports = function (body, user, title, includeSearchBar = true) {
  // sets search bar in its own block for readabilitly
  const searchMovie = `
  <div class="flex-auto flex justify-center mt-8">
    <div class="w-full md:max-w-md sm:max-w-sm max-w-xs m-auto">
      <form id="search-bar">
        <input id="search-box" type="search" class="bg-purple-white shadow rounded border-0 p-3 w-full"
            placeholder="Search Movies or TV Shows to add...">
      </form>
    </div>
  </div>

  <div class="relative mt-8 w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container">
    <div id="movies-title" class="overflow-x-auto w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg flex flex-row justify-between">
    </div>
    <div class="absolute top-0 left-0 fadeToBackLeft"></div>
    <div class="absolute top-0 right-0 fadeToBackRight"></div>
  </div>
  `;

  // header button layout for someone signed in
  const notSignedIn = `
  </div>
    <div>
      <a href="/login"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">Login</a>
      <a href="/signup"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">SignUp</a>
    </div>`;

  // header button layout for someone not signed in
  const signedIn = `
    </div>
    <div>
    <a href="/user"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">My Watch List</a>
    <a href="/logout"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">Logout</a>
    </div>`;

  // Render the end view

  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
      <!-- Tailwind Stylesheet -->
      <link rel="stylesheet" href="../stylesheets/output.css" type="text/css" />
      <!-- Custom Stylesheet -->
      <link rel="stylesheet" href="../stylesheets/style.css" type="text/css" />
      <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
      <!-- jQuery -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    
      <title>${title}</title>
    </head>
    <body>
      <header>
        <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
          <div class="flex items-center flex-shrink-0 mr-6">
            <a href="/home">
              <img src="../stylesheets/w4logo.svg" alt="W4 Logo/" class="logo">
            </a>
          </div>
    
          <div class="block sm:hidden" id="menu-btn">
            <button
              class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
    
          <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto sm:block hidden" id="menu-options">
            <div class="text-sm sm:flex-grow flex-row sm:justify-between flex mr-4">
              <!-- REMOVED HOME LINK USING WEBPAGE LOGO INSTEAD
              <a href="/home" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </a> -->
        
            ${!user ? notSignedIn : `<p class="text-teal-200 inline-block sm:mt-0 mt-4">Welcome ${user.email}!</p>${signedIn}`}
            </div>
          </nav>
        </header>
        ${includeSearchBar ? searchMovie : "" }
        
        ${body}
    
      <footer>
        <div class="w-full bg-gray-900 mt-5">
          <div class="container flex justify-around font-extrabold text-white mx-auto">
            <div class="w-1/3 justify-around font-extrabold text-white">
              <div  class="text-teal-200 border-b-2">Powered By By:</div>
              <a class="px-3 devLink" href="https://www.utelly.com/">UTelly</a>
              <a class="px-3 devLink" href="http://www.omdbapi.com/">OMDB</a>
            </div>

            <div class="w-1/3 justify-around font-extrabold text-white">
              <div class="text-teal-200 border-b-2">Developed By:</div>
              <a class="px-3 devLink" href="https://brian-fairbanks.github.io/Bootstrap-Portfolio/index.html">Brian</a>
              <a class="px-3 devLink" href="https://github.com/ryangautier1">Ryan</a>
              <a class="px-3 devLink" href="https://github.com/JumiGore">Jumi</a>
              <a class="px-3 devLink" href="https://github.com/KHANHHOANG1988">Khanh</a>
              <a class="px-3 devLink" href="https://github.com/jroenitz">Jordan</a>
            </div>
          </div>
          <div class="text-teal-200">Copyright 2020</div>
        </div>
      </footer>
    
      <script src="/js/navbar.js"></script></body>
      <script type="text/javascript" src="/js/search.js"></script>

    </html>`;
};
