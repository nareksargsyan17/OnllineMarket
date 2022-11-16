import ToBascet from './ToBascet';
import Favorite from './Favorite';
import Perfume from './Perfume';
export default function Brends(item, data = "") {
    const content = document.querySelector("#content");
    const brend = document.createElement("div");
    const h4 = document.querySelector("#h4");
    h4.textContent = item.brend
    content.innerHTML = ""
    brend.className = "item";
    content.innerHTML += ` 
        <div class="menuDiv"><img class="menuImg" src="./src/img/${item.img}" alt=${item.brend}></div>
        <p id="description">${item.description}</p>
        `
    item.products.forEach(elem => {
        brend.innerHTML += `
            <div>
            <a>
            <img src="./src/img/${elem.img}" alt="">
            </a>
            <h3>${item.brend}</h3>
            <h5>${elem.name}</h5>
            <p>${elem.price} Դ</p>
            <div id="heart">
            <div class="heart"></div>
            </div>
            <img src="./src/img/sale.png" class="toBascet">
            </div>
            `;
    })
    history.pushState(null, "", ``)
    content.append(brend);
    Favorite(data);
    ToBascet();
    const items = document.querySelectorAll(".item > div");
    items.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (e.target == item.children[0].firstElementChild) {
                data.forEach((elem) => {
                    if (elem.brend == item.children[1].textContent) {
                        elem.products.forEach(parfume => {
                            if (parfume.name == item.children[2].textContent) {
                                Perfume(parfume, elem.brend);
                            }
                        });
                    }
                })
            }
        })
    })
}