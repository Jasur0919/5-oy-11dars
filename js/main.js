const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")
const API_URL = "https://fakestoreapi.com/users"


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




const setWish = async(id) =>{
    let getDate = await fetch(`${API_URL}/${id}`) 
    getDate
    .json()
    .then(ris =>{
       let wishes = JSON.parse(localStorage.getItem('wishes')) || []
       let son = wishes.findIndex(el =>el.id === +id )
       if(son < 0 ){
        localStorage.setItem('wishes',JSON.stringify([...wishes,ris]))
       }

    })
    .catch(arr =>console.log(arr)) 
}
wrapper.addEventListener('click', (e) => {
    let {name} = e.target
   if(name === 'product-wish'){
       let id = e.target.closest('[data-id]').dataset.id
       setWish(id)

    }
})









// ============= Navbar toggle START ================
const navbarCollection = document.querySelector(".navbar__collection")
const navbarMenu = document.querySelector(".navbar__menu")

navbarMenu.addEventListener("click", ()=>{
    navbarCollection.classList.toggle('show')
})
// ============= Navbar toggle END ================
