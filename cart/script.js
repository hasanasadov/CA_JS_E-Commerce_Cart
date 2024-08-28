function start() {
    let table = document.querySelector("table");
    let createtbody = document.createElement("tbody");
    for (let i = 0; i < cartItems.length; i++) {
        let c = 1;
        for (let j = i + 1; j < cartItems.length; j++) {
            if (cartItems[i].id === cartItems[j].id) {
                c++;
                cartItems.splice(j, 1);
                j--;
            }
        }
        createtbody.innerHTML += `
                <tr>
                    <td>${cartItems[i].id}</td>
                    <td>${cartItems[i].name}</td>
                    <td>${cartItems[i].price}</td>
                    <td>${cartItems[i].description}</td>
                    <td>${c}</td>
                    <td><a><img class="remove-btn" width =20 src="../assets/minus.svg" alt=""/></a></td>
                </tr>
            `;
        table.appendChild(createtbody);
        cartItems[i].count = c;
    }
}
function refreshNewCart() {
    newCart = [];
    for (let i = 0; i < cartItems.length; i++) {
        for (let j = 0; j < cartItems[i].count; j++) {
            newCart.push(cartItems[i]);
        }
    }
    document.querySelector(".cart-count").textContent = newCart.length;
}
function removeButton(){
    let trEl = document.querySelectorAll("tr");
    let removeBtn = document.querySelectorAll(".remove-btn");
    removeBtn.forEach((el, idx) => {
        el.addEventListener("click", () => {
            cartItems[idx].count--;
            refreshNewCart();
            trEl[idx + 1].children[4].textContent--;
            localStorage.setItem("cart", JSON.stringify(newCart));
            if (trEl[idx + 1].children[4].textContent == 0) {
                trEl[idx + 1].remove();
            }
        });
    });
}

//GetElements
const cartItems = JSON.parse(localStorage.getItem("cart"));
cartItems == null ? cartItems = [] : cartItems

let newCart = [];//Ordered

start();
refreshNewCart();
removeButton();