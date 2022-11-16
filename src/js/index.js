import Home from './modules/Home';
const logo = document.querySelector("#logo");
history.pushState("", "", "");
logo.addEventListener("click", function () {
    history.go(-1)
})
Home();
window.addEventListener("popstate", function () {
    history.go(0)
})