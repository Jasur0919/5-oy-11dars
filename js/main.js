const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")
const API_URL = "https://fakestoreapi.com/products"


async function fetchData(api){
    let getData = await fetch(api)
    getData
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(arr))
        .finally(() => {
            loading.style.display = "none"
        })
}
fetchData(API_URL)


function createCard(data){
    let fragment = document.createDocumentFragment()
    data.forEach(product=>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <img class="card__image" src="" alt="">
        <h2 class="card__title" title = "${product.title}">${product.title}</h2>
        <p class="card__desc" title = "${product.description}">${product.description}</p>
        <button>Like</button>
        <button>Cart</button>
        `


        fragment.appendChild(card)
    });

    wrapper.appendChild(fragment)
}












// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__collection")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", ()=>{
    navbarCollection.classList.toggle('show')
})
// ============= Navbar toggle END ================
