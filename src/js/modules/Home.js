import Bascet from './Bascet';
export default async function Home(){
    const perfumes = document.createElement("div");
    const content = document.querySelector("#content");
    perfumes.id = "perfumes";
    perfumes.className = "item";
    content.append(perfumes);
    history.pushState(null, "" , "");
    await fetch("http://localhost:7000/perfumes/")  
.then(data => data.json())
.then(data => {
    let perfumesArr = [];
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 3; j++){
            perfumesArr.push(data[i].products[j].name)
            perfumes.innerHTML += `
            <div>
            <a href="">
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
})
    Bascet();
}