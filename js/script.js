/*let menu = document.getElementById("menu");
let sidebar = document.querySelector(".side-bar");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

let searchbar = document.getElementById("search-bar-icon");
let realsearchbar = document.querySelector(".header-search-bar");

searchbar.addEventListener("click", () => {
  realsearchbar.classList.toggle("show-searchbar");
});
*/
function myFunction() {
  let a = document.getElementById("hide-sidebar");

  if (a.style.display === "none") {
    a.style.display = "block";
    a.style.position = "absolute";
    a.style.zIndex = "999";
  } else {
    a.style.display = "none";
  }
}

function mySearchbar() {
  let x = document.getElementById("the-search-bar");

  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.width = "200px";
  } else {
    x.style.display = "none";
  }
}
/*darkmode*/
function darkMode() {
  let element = document.body;
  let sidebar = document.getElementById("hide-sidebar");
  let mainbody = document.getElementById("video-container");
  element.classList.toggle("dark-mode");
  mainbody.classList.toggle("dark-mode");
  sidebar.classList.toggle("dark-mode");
}
