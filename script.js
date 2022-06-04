var home = document.querySelector(".home")
var navbar = document.querySelector(".navbar")
var mode_btn = document.querySelector(".mode")
var mode_img = document.querySelector(".mode_img")
var search_btn = document.querySelector(".search")
var search_btnclose = document.querySelector(".search_close")
var search_box = document.querySelector(".search__box")
var mode = false
var search = false

mode_btn.onclick = function () {
    mode = !mode
    if (mode === true) {
        home.setAttribute("style", "background: #252525;")
        navbar.setAttribute("style", "background: #454646;")
        mode_img.setAttribute("src", "./moon.svg")
        mode_img.setAttribute("style", "transform: rotate(0deg);" )
    } else {
        home.setAttribute("style", "background: #fafafa;")
        navbar.setAttribute("style", "background: #949494;")
        mode_img.setAttribute("src", "./sun.svg")
        mode_img.setAttribute("style", "transform: rotate(-90deg);" )
    }
}
search_btn.onclick = function () {
    search = !search
    if (search === true) {
        search_box.setAttribute("style", "height: 100vh;")
    } else {
        search_box.setAttribute("style", "height: 0;")
    }
}
search_btnclose.onclick = function () {
    search = !search
    if (search === true) {
        search_box.setAttribute("style", "height: 0;")
    } else {
        search_box.setAttribute("style", "height: 0;")
    }
}