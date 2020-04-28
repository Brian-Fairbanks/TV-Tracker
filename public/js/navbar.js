var isOpen = false;
// if (!isOpen) {
//     document.getElementById("menu-options").classList.add("hidden");
//     document.getElementById("menu-options").classList.remove("block");
// }
document.getElementById("menu-btn").addEventListener("click", function(event) {
    event.preventDefault();
    isOpen = !isOpen;
    if (isOpen) {
        document.getElementById("menu-options").classList.add("my-block");
        document.getElementById("menu-options").classList.remove("my-hidden");
    }
    else {
        document.getElementById("menu-options").classList.remove("my-block");
        document.getElementById("menu-options").classList.add("my-hidden");
    }
})

