import Home from './modules/Home';
import Menu from './modules/Menu';
const logo = document.querySelector("#logo");
const bascet = document.querySelector("#bascet");
const fullDiv = document.querySelector("#fullDiv");
window.addEventListener("load",()=>{
    Home();
})
Menu();
logo.addEventListener("click", function () {
    history.go(-1)
})
window.addEventListener("popstate", function () {
    history.go(0)
})
bascet.addEventListener("click", () => {
    fullDiv.style.height = `${document.body.clientHeight}px`;
    fullDiv.style.display = "block";

    console.log(document.body.clientHeight);
})
console.log(window.history);