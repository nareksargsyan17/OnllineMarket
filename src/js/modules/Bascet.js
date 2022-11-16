export default function Bascet() {
    const box = document.querySelector("#boxDiv");
    const total = document.querySelector("#total");
    const count = document.querySelector("#count");
    const fullDiv = document.querySelector("#fullDiv");
    fetch("http://localhost:7000/bascet/")
        .then(data => data.json())
        .then(data => {
            data.forEach((item) => {
                if(box.children.length <= data.length){
            box.insertAdjacentHTML("beforeend", `
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
            <p>${item.price * item.count} Դ</p>
            </div>
            <img src="./src/img/delete.png" alt="" class="delete">
            </div>`)
        }
            })
            return data
        })
        .then(data => {
            const countDiv = document.querySelectorAll(".countDiv");
            const thisCount = document.querySelectorAll(".thisCount");
            const priceDiv = document.querySelectorAll(".priceDiv");
            const del = document.querySelectorAll(".delete");
            data.forEach((item, index) => {
                total.textContent = (parseInt(total.textContent) + (item.price*item.count)) + " Դ";
                count.textContent = parseInt(count.textContent) + parseInt(item.count)
                del[index].addEventListener("click", () => {
                    total.textContent = (parseInt(total.textContent) - parseInt(priceDiv[index].textContent)) + " Դ";
                    count.textContent = parseInt(count.textContent) - parseInt(thisCount[index].textContent);
                    fetch("http://localhost:7000/bascet/" + `${item.id}`, {
                        method: "DELETE",
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                    del[index].parentElement.remove();
                })
                countDiv[index].firstElementChild.addEventListener("click", () => {
                    if (thisCount[index].textContent > 1) {
                        thisCount[index].textContent = parseInt(thisCount[index].textContent) - 1;
                        priceDiv[index].firstElementChild.textContent = (parseInt(priceDiv[index].firstElementChild.textContent) - item.price) + "Դ"
                        total.textContent = (parseInt(total.textContent) - item.price) + " Դ";
                        count.textContent = parseInt(count.textContent) - 1;
                        fetch("http://localhost:7000/bascet/" + `${item.id}`, {
                            method: "PATCH",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({
                                count: parseInt(item.count)-1
                            })
                        })
                    }
                })
                countDiv[index].lastElementChild.addEventListener("click", () => {
                    if (thisCount[index].textContent < 20) {
                        thisCount[index].textContent = parseInt(thisCount[index].textContent) + 1;
                        priceDiv[index].firstElementChild.textContent = (parseInt(priceDiv[index].firstElementChild.textContent) + item.price) + "Դ"
                        total.textContent = (parseInt(total.textContent) + item.price) + " Դ";
                        count.textContent = parseInt(count.textContent) + 1;
                        fetch("http://localhost:7000/bascet/" + `${item.id}`, {
                            method: "PATCH",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({
                                count: parseInt(item.count)+1
                            })
                        })
                    }
                })
            })

            return data
        })
        .then(data => {
            fullDiv.addEventListener("click",(e) => {
                if (e.target == fullDiv) {
                    fullDiv.style.display = "none";
                    total.textContent = 0;
                    count.textContent = 0;
                }
            })
        })
}