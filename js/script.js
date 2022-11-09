const perfumes = document.querySelector("#perfumes");

fetch("http://localhost:7000/perfumes/")
.then(data => data.json())
.then(data => {
    data.forEach(item => {
        perfumes.innerHTML += `
            <div>
            <a href="">
                <img src="img/${item.img}" alt="">
            </a>
            <h3>${item.brend}</h3>
            <h5>${item.name}</h5>
            <p>${item.price}</p>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <!-- <img src="img/favorite.png" alt=""> -->
        </div>
        `
    });
})