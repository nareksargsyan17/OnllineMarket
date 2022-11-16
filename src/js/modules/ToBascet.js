export default function ToBascet(parfume = "", brend = "") {
    const toBascetArr = document.querySelectorAll(".toBascet");
    toBascetArr.forEach((item) => {
        item.addEventListener("click", async () => {
            await fetch("http://localhost:7000/bascet/")
                .then(data => data.json())
                .then(data => {
                    if (parfume == "" && brend == "") {
                        if (data.filter(el => el.name == item.parentElement.children[2].textContent).length == 0) {
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
                                    count: 1
                                })
                            })
                        }
                    } else {
                        if (data.filter(el => el.name == parfume.name).length == 0) {
                            fetch("http://localhost:7000/bascet/", {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify({
                                    brend: brend,
                                    name: parfume.name,
                                    price: parfume.price,
                                    img: parfume.img,
                                    count: 1
                                })
                            })
                        }
                    }
                })
        })
    })
}