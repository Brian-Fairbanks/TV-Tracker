module.exports = function() {
  return `
<div class="flex content-center justify-center mt-32">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 login">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email-input">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email-input" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password-input">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password-input" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800" href="#">
            Forgot Password?
          </a>
        </div>
        <p class="text-center mt-5">Or sign up <a href="/" class="text-teal-500">here</a></p>
      </form>

    </div>
  </div>


  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="js/login.js"></script>
`;
};
