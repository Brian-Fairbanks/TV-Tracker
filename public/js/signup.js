$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var passwordConfirm = $("input#password-confirm");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    if (passwordInput.val().trim() !== passwordConfirm.val().trim()){
      $("#alert-password").show();
      return;
    }
    
    
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/user");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);      
  }

  function handleLoginErr() {
    console.log("somethingworng");
    $("#alert-email").show();
   
    // alert("Incorrect email format. Please try again");
  }
  $("#alert-email").on("click",function(){
    $("#alert-email").hide();
  });
});
