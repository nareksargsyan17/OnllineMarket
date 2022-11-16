export default function Favorite(data) {
    const heartDiv = document.querySelectorAll("#heart");
    const heart = document.querySelectorAll(".heart");
    const favorite = document.querySelector("#favElem");
    const favDiv = document.querySelector("#favDiv");
    heartDiv.forEach((item, index) => {
        data.forEach((elem) => {
            if (elem.brend == item.parentElement.children[1].textContent) {
                elem.products.forEach(parfume => {
                    let copy = ""
                    if (parfume.name == item.parentElement.children[2].textContent) {
                        if (localStorage.getItem(parfume.name) == parfume.name) {
                            localStorage.setItem(parfume.name, parfume.name);
                            heart[index].style.setProperty('--boxAfterBackColor', '#d89728');
                            if (localStorage.length > favorite.children.length) {
                                copy = item.parentElement;
                                favorite.append(copy.cloneNode(true));
                            }
                        }
                        item.addEventListener("click", () => {
                            if (localStorage.getItem(parfume.name) != parfume.name) {
                                heart[index].style.setProperty('--boxAfterBackColor', '#d89728');
                                localStorage.setItem(parfume.name, parfume.name);
                            } else {
                                heart[index].style.setProperty('--boxAfterBackColor', 'rgb(169, 169, 169)');
                                localStorage.removeItem(parfume.name);
                                if (favDiv.style.display == "block") {
                                    item.parentElement.remove();
                                }
                            }
                            copy = item.parentElement;
                            favorite.append(copy.cloneNode(true));
                        })
                    }
                });
            }
        })
    })
}