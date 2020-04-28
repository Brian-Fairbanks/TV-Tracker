var isOpen = false;

document.getElementById("menu-btn").addEventListener("click", function(event) {
  event.preventDefault();
  isOpen = !isOpen;
  if (isOpen) {
    document.getElementById("menu-options").classList.add("my-block");
    document.getElementById("menu-options").classList.remove("my-hidden");
  } else {
    document.getElementById("menu-options").classList.remove("my-block");
    document.getElementById("menu-options").classList.add("my-hidden");
  }
});
