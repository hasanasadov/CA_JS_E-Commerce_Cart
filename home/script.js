function setItems() {
    localStorage.setItem("items", JSON.stringify(items));
}
function getItems() {
    products = JSON.parse(localStorage.getItem("items"));
    cart = JSON.parse(localStorage.getItem("cart"));
    if (products == null) {
        products = [];
    }
    setItems();
}

function showItems() {
    let table = document.querySelector("table");
    let createtbody = document.createElement("tbody");
    for (let i = 0; i < products.length; i++) {
        createtbody.innerHTML += `
            <tr>
                <td>${products[i].id}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].description}</td>
                <td><a><img class="add-btn" width =20 src="../assets/add-to-cart.svg" alt=""</a></td>
            </tr>
        `;
        table.appendChild(createtbody);
    }
}

getItems();
showItems();




let addBtn = document.querySelectorAll(".add-btn");
if (cart == null) {
    cart = [];
}

function count() {
    
    let count = cart.length ;
    document.querySelector(".cart-count").innerHTML = count;
    
    addBtn.forEach((e, idx) => {
        e.addEventListener("click", function () {
            let product = items.find((product) => product.id == idx + 1);
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            count++;
            document.querySelector(".cart-count").innerHTML = count;
        });
    });
}

count();
localStorage.getItem("cart");
