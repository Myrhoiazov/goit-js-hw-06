const instruments = [{
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg'
    name: 'Молоток',
    price: 150
}, {
    img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg'
    name: 'Перфоратор',
    price: 3000
}, {
   img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg'
    name: 'Рівень',
    price: 2000
}]

const list = document.querySelector(".list")
// console.log(list)


function createElements(){
    const markup = instruments.reduce((acc, elem) => {
        return acc += `<li class="item">
        <div class="img-div">
        <img src=${elem.img} alt="${elem.name}"/>
        </div>
        <div class="data">
        <p class="data-text">${elem.name}</p>
        <p class="data-text">${elem.price}</p>
        <button class="js-btn" type="button">Купити</button>
        </div>
        </li>`
    }, "")

    list.insertAdjacentHTML("beforeend", markup)
}


list.addEventListener("click", onButtonClick)

function onButtonClick(event){
    
    let data = {}
    if(event.target.classList.contains("js-btn")){
        
        const elements = event.target.parentElement.children
        data.name = elements[0].textContent
        data.price = elements[1].textContent
        console.log(data)
    }
   
}

createElements()
