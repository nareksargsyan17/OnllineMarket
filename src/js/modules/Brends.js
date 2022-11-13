import Bascet from './Bascet';
export default function Brends(item){
    console.log(item);
        const content = document.querySelector("#content");
        const brend = document.createElement("div");
        const h4 = document.querySelector("#h4");
        h4.textContent = item.brend
        content.innerHTML = ""
        brend.className = "item";
        console.log(item);
        content.innerHTML +=` 
        <div class="menuDiv"><img class="menuImg" src="./src/img/${item.img}" alt=${item.brend}></div>
        <p id="description">${item.description}</p>
        `
        item.products.forEach(elem => {
            brend.innerHTML += `
            <div>
            <a href="">
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
            `;})
            history.pushState(null, "" , ``)
        content.append(brend);
        Bascet();
    }