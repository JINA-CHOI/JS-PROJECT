const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".nav-bar");
const closeBtn = document.querySelector(".closeBtn");

/*네비게이션바*/
function openNav(){
    navBar.classList.add("nav");
    navBar.classList.remove("close");

}


function closeNav(){
    navBar.classList.add("close");
}


navToggle.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

