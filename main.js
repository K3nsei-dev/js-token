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

// posting data 
fetch('https://lca-pointofsales.herokuapp.com//auth', {
    method: 'POST',
    body: JSON.stringify({
        "username": "jeandreross@gmail.com",
        "password": "lifechoices1234"
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
  .then(res => res.json())
  .then(res => {
            console.log(res);
            myStorage = window.localStorage;
            console.log(res["access_token"]);
            myStorage.setItem("jwt-token", res["access_token"]);
   });

  const token = window.localStorage.getItem('jwt-token')
  fetch('https://lca-pointofsales.herokuapp.com//add-products', {
    method: 'POST',
    body: JSON.stringify({
        "product_name": "dummy",
        "product_type": "dummy",
        "product_price": 1,
        "product_description": "dummy",
        "product_image": "dummy"
    }),
  //   const accessToken = localStorage.getItem('jwt-token');
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': `jwt ${token}`
    }
})