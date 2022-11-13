export default function Bascet(){
    const toBascetArr = document.querySelectorAll(".toBascet");
    const box = document.querySelector("#boxDiv");
    const total = document.querySelector("#total");
    const count = document.querySelector("#count");
    console.log(toBascetArr);
    fetch("http://localhost:7000/bascet/")
    .then(data => data.json())
    .then(async data => {
        data.forEach((item, index)=>{
            box.insertAdjacentHTML("afterbegin", `
            <div class="box">
            <div class="perfumeDiv">
            <img src="./src/img/${item.img}" alt="">
            <div>
            <h5>${item.brend}</h5>
            <h4>${item.name}</h4>
            <p>${item.price} Դ</p>
            </div>
            </div>
            <div class="countDiv">
            <button>-</button>
            <p class="thisCount">${item.count}</p>
            <button>+</button>
            </div>
            <div class="priceDiv">
            <p>${item.price*item.count} Դ</p>
            </div>
            <img src="./src/img/delete.png" alt="" class="delete">
            </div>`)
            const countDiv  = document.querySelector(".countDiv");
            const thisCount = document.querySelector(".thisCount");
            const priceDiv = document.querySelector(".priceDiv");
            const del = document.querySelector(".delete");
            total.textContent = (parseInt(total.textContent)+(parseInt(priceDiv.firstElementChild.textContent))) +" Դ";
            count.textContent = parseInt(thisCount.textContent)+parseInt(count.textContent);
            countDiv.firstElementChild.addEventListener("click", ()=>{
                if(thisCount.textContent>1){
                    thisCount.textContent = parseInt(thisCount.textContent)-1;
                    priceDiv.firstElementChild.textContent = (parseInt(priceDiv.firstElementChild.textContent) - item.price) +"Դ"
                    total.textContent = (parseInt(total.textContent)-item.price) +" Դ";
                    count.textContent = parseInt(count.textContent)-1;
                }
            })
            countDiv.lastElementChild.addEventListener("click", ()=>{
                if(thisCount.textContent<20){
                    thisCount.textContent = parseInt(thisCount.textContent)+1;
                    priceDiv.firstElementChild.textContent = (parseInt(priceDiv.firstElementChild.textContent) + item.price) +"Դ"
                    total.textContent = (parseInt(total.textContent)+item.price)+" Դ";
                    count.textContent = parseInt(count.textContent)+1;
                }
            })
            del.addEventListener("click",()=>{
                del.parentElement.remove();
                fetch("http://localhost:7000/bascet/"+`${item.id}`,{
                        method: "DELETE",
                        headers:{
                            "content-type": "application/json"
                        }
                    })
                })
                    fullDiv.addEventListener("click", (e) => {
                        if (e.target == fullDiv) {
                    fullDiv.style.display = "none";
                    const allCount = document.querySelectorAll(".thisCount");
                    allCount.forEach((elem, index)=>{
                        fetch("http://localhost:7000/bascet/"+`${item.id}`,{
                            method: "PATCH",
                            headers:{
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({
                                count : parseInt(elem.textContent)
                            })
                        })
                    })
                }
        })
    })
        console.log(toBascetArr);
        toBascetArr.forEach((item) => {
            item.addEventListener("click", () => {
            if(data.filter(el => el.name == item.parentElement.children[2].textContent).length == 0){
                fetch("http://localhost:7000/bascet/", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        brend: item.parentElement.children[1].textContent,
                        name: item.parentElement.children[2].textContent,
                        price: parseInt(item.parentElement.children[3].textContent),
                        img: item.parentElement.children[2].textContent + ".jpg",
                        count:1
                    })
                })     
                }
                })
            })
        })
}