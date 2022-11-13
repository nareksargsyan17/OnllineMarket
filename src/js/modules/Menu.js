
import Brends from './Brends';
export default async function Menu(){
    const brends = document.querySelector("#brends");
    await fetch("http://localhost:7000/perfumes/")  
    .then(data => data.json())
    .then(data => {
        data.forEach((brend) => {
            brends.innerHTML += `
            <div class="menuDiv"><img class="menuImg" src="./src/img/${brend.img}" alt=${brend.brend}></div>`
        });
        return data
    }).then(data => {
        const brendsArr = [...document.querySelectorAll("#brends > div")]
        brendsArr.forEach((item,index)=>{
            item.firstElementChild.addEventListener("click", async ()=>{
                console.log(data[index]);
                Brends(data[index]);
            })
        })
    })
}