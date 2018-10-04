/**
 * Created by user on 10/3/2018.
 */

// Open up the navbar blocks
function openNavbar() {
    var navbarItems = document.getElementById("navbar-items");
    var bars = document.getElementById("bars");
    for(var i=0; i < navbarItems; i++) {
        var elem = navbarItems.children[i];
        if(!elem.hasAttribute("onclick")) {
            elem.style.display = "block";
        }
    }
    bars.setAttribute("onclick", "closeNavbar();");
}
function closeNavbar() {
    var navbarItems = document.getElementById("navbar-items");
    var bars = document.getElementById("bars");
    for(var elem in navbarItems.children) {
        if(!elem.hasAttribute("onclick")) {
            elem.style.display = "none";
        }
    }
    bars.setAttribute("onclick", "openNavbar();");
}