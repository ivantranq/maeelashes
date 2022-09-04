const burgerMenu = document.getElementById("burger-menu");
const navbarList = document.getElementsByClassName("navbar__list")[0];
const navbarLink = document.getElementsByClassName("navbar__link");

console.log(navbarLink);

burgerMenu.addEventListener("click", () => {
  navbarList.classList.toggle("show");
});

console.log(navbarList.classList.contains("show"));

if (navbarList.classList.contains("show")) {
  console.log(open);
  navbarLink[1].addEventListener("click", () => {
    navbarList.classList.toggle("show");
  });
}
