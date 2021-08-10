// getting the products 
let base_URL = "https://lca-pointofsales.herokuapp.com//view-products"

function getData(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

getData(base_URL)

// authorising user aka login
let myStorage;

fetch('https://lca-pointofsales.herokuapp.com//auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
        "username": "jeandreross@gmail.com",
        "password": "lifechoices1234"
    })
})
  .then(res => res.json())
  .then(res => {
            // console.log(res);
            let myStorage = window.localStorage;
            // console.log(res["access_token"]);
            myStorage.setItem("jwt-token", JSON.stringify(res["access_token"]));
            return myStorage
   });

// posting products
function postProducts() {
  const user = JSON.parse(localStorage.getItem('jwt-token'));
  const myStorage = user;
  fetch('https://lca-pointofsales.herokuapp.com//add-products', {
    method: 'post',
    dataType : 'json',
    body: JSON.stringify({
        "product_name": "dummy",
        "product_type": "dummy",
        "product_price": 1,
        "product_description": "dummy",
        "product_image": "dummy"
    }),
    headers: {
      'Authorization': `jwt ${ myStorage }`,
      'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors',
    cache: 'default',
}).then(res => res.json())
    .then(res => console.log(res))
}

postProducts()

// getting available products
function getProducts(){
    fetch('https://lca-pointofsales.herokuapp.com//view-products',{
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }).then(res => res.json())
        .then(res => console.log(res))
}

getProducts()