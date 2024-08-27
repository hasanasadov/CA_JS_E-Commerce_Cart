const cartItems = JSON.parse(localStorage.getItem("cart"));
const trEl = document.querySelectorAll("tr");


if (cartItems == null) {
    cartItems = [];
}

function start(){
    let table = document.querySelector("table");
    let createtbody = document.createElement("tbody");
    for (let i = 0; i < cartItems.length; i++) {
        let c = 1;
        for (let j = i +1; j < cartItems.length; j++) {
            if (cartItems[i].id === cartItems[j].id) {
                c++;
                cartItems.splice(j, 1);
                j--;
            }
        }
        console.log(c);
        createtbody.innerHTML += `
                <tr>
                    <td>${cartItems[i].id}</td>
                    <td>${cartItems[i].name}</td>
                    <td>${cartItems[i].price}</td>
                    <td>${cartItems[i].description}</td>
                    <td>${c}</td>
                </tr>
            `;
        table.appendChild(createtbody);
    }
    
}


start();