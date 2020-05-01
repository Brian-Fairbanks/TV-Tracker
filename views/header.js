// The body here should include the login/logout button in the header as well

module.exports = function (body, user, includeSearchBar = true) {
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

  <div id="movies-title" class="mt-8 overflow-x-auto w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex flex-row justify-between"></div>
  `;

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

    
      <title>W4</title>
    </head>
    <body>
      <header>
        <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
          <div class="flex items-center flex-shrink-0 mr-6">
            <img src="../stylesheets/w4logo.svg" alt="W4 Logo/" class="logo">
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
              <a href="/home" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </a>
        
            ${!user ?
    `</div>
            <div>
              <a href="/login"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">Login</a>
              <a href="/signup"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">Sign
              Up</a>
            </div>
          </div>
        </nav>
      </header>` 
    : `
      <p class="text-teal-200 inline-block sm:mt-0 mt-4">Welcome ${user.email}!</p>
      </div>
      <div>
      <a href="/user"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">My Watch List</a>
      <a href="/logout"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">Logout</a>
      </div>
      </div>
      </nav>
      </header>`
}
      ${includeSearchBar ? searchMovie : "" }
           
        ${body}
    
      <footer>
        <div class="text-teal-200">Copyright</div>
      </footer>
    
      <script src="/js/navbar.js"></script></body>
      <script type="text/javascript" src="./js/search.js"></script>

    </html>`;
};
