import Bascet from './Bascet';
import Menu from './Menu';
import ToBascet from './ToBascet';
import Favorite from './Favorite';
import Perfume from './Perfume';
export default function Home() {
    const total = document.querySelector("#total");
    const count = document.querySelector("#count");
    const perfumes = document.querySelector("#perfumes");
    const fullDiv = document.querySelector("#fullDiv");
    const favDiv = document.querySelector("#favDiv");
    console.log(perfumes.childElementCount);
    fetch("http://localhost:7000/perfumes/")
        .then(data => data.json())
        .then(data => {
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 3; j++) {
                    perfumes.innerHTML += `
            <div>
            <a>
                <img src="./src/img/${data[i].products[j].img}" alt="">
            </a>
            <h3>${data[i].brend}</h3>
            <h5>${data[i].products[j].name}</h5>
            <p>${data[i].products[j].price} Դ</p>
            <div id="heart">
                <div class="heart"></div>
            </div>
            <img src="./src/img/sale.png" class="toBascet">
        </div>
        `;
                }
            }
            return data;
        })
        .then(data => {
            Menu()
            return data;
        })
        .then(data => {
            const fav = document.querySelector("#fav");
            fav.addEventListener("click", async () => {
                favDiv.style.height = `${document.body.clientHeight}px`;
                if (favDiv.style.display != "block") {
                    favDiv.style.display = "block";
                    fullDiv.style.display = "none";
                    count.textContent = 0;
                    total.textContent = 0;
                } else {
                    favDiv.style.display = "none"
                }
            })
            return data;
        })
        .then(data => {
            const bascet = document.querySelector("#bascet");
            bascet.addEventListener("click", async () => {
                fullDiv.style.height = `${document.body.clientHeight}px`;
                if (fullDiv.style.display != "block") {
                    Bascet();
                    fullDiv.style.display = "block";
                    favDiv.style.display = "none";
                    count.textContent = 0;
                    total.textContent = 0;
                } else {
                    fullDiv.style.display = "none"
                }
            })
            ToBascet();
            return data;
        })
        .then(data => {
            const items = document.querySelectorAll(".item > div");
            items.forEach((item, index) => {
                item.addEventListener("click", (e) => {
                    if (e.target == item.children[0].firstElementChild) {
                        data.forEach((elem) => {
                            if (elem.brend == item.children[1].textContent) {
                                elem.products.forEach(parfume => {
                                    if (parfume.name == item.children[2].textContent) {
                                        Perfume(parfume, elem.brend);
                                        ToBascet(parfume, elem.brend);
                                    }
                                });
                            }
                        })
                    }
                })
            })
            return data
        })
        .then(data => {
            Favorite(data);
        })

}