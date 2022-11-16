export default function Perfume(item, brend) {
    const content = document.querySelector("#content");
    const perfumeDiv = document.createElement("div");
    const h4 = document.querySelector("#h4");
    h4.textContent = item.name
    content.innerHTML = ""
    perfumeDiv.id = "perfumeDiv";
    perfumeDiv.style.display = "flex";
    perfumeDiv.innerHTML += `
            <div id = "perfume1">
            <div id="heart">
                <div class="heart"></div>
            </div>
                <img src="./src/img/${item.img}" alt="">
            </div>
            <div id = "perfume2">
                <h5>${brend}</h5>
                <h3>${item.name}</h3>
                <div id="perfumeMenu">
                <span>100ml.</span>
                <p>${item.price} Դ</p>
                <img src="./src/img/sale.png" class="toBascet">
                </div>
                <h6>Description</h6>
                <p>${item.info}</p>
            </div>
            `;
    history.pushState(null, "", ``)
    content.append(perfumeDiv);
}