// code for toggle menu
const navLinks = document.getElementById("nav_links");// get the id from the div class

function showMenu() {
    navLinks.style.right = "0"; // when toggle it will show the menu right in 0 value
}

function hideMenu() {
    navLinks.style.right = "-200px"; // when toggle it will hide the menu right in -200 value

}