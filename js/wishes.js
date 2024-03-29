
const wrapper = document.querySelector(".wrapper")
let wishes = JSON.parse(localStorage.getItem("wishes"))
console.log(wishes);
function createCard(data){
    let fragment = document.createDocumentFragment()
    data.forEach(product=>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <div data-id=${product.id}>
        <img class="card__image" src="" alt="">
        <h2 class="card__title" ">${product.address.geolocation.lat}</h2>
        <p class="card__desc">${product.address.geolocation.long}}</p>
        <button name="product-wish">Like</button>
        <button>Cart</button>
        </div>
        `


        fragment.appendChild(card)
    });

    wrapper.appendChild(fragment)
}


createCard(wishes)