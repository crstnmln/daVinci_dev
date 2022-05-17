"use strict";

if (localStorage.getItem("cartOnBrowser")) {
    mainCart = JSON.parse(localStorage.getItem("cartOnBrowser"));
} else {
    localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
}

inventory.forEach((product) => {
    box.innerHTML += `
    <section class = "boxItem" id = "product${product.id}">
        <img src="${product.source}" alt="${product.alt}" width="150" height="auto" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$ ${product.price}</p>
        <input type="button" value="Comprar" id = "buy${product.id}">
        <input type="button" value="Agregar al carrito" id = "addCart${product.id}">
    </section>`;
});

inventory.forEach((product) => {
    purchaseButton = document.getElementById(`buy${product.id}`);
    purchaseButton.addEventListener("click", (e) => {
        console.log(e.target.id);
        boxPurchase.innerHTML = `
    <section class = "boxItem" id = "product${product.id}">
        <p>GRACIAS POR SU COMPRA</p>
        <img src="${product.source}" alt="${product.alt}" width="150" height="auto" />
        <h3>Has adquirido un ${product.name}</h3>
        <p>$ ${product.price}</p>
    </section>`;
    });
});

inventory.forEach((product) => {
    cartButton = document.getElementById(`addCart${product.id}`);
    cartButton.addEventListener("click", (event) => {
        // porque siempre cartButton.id me muestra addCart10 y porque no puedo hacer `addCart${product.id}` === cartButton.id

        let inCart = mainCart.some((product) => {
            return `addCart${product.id}` === event.target.id;
        });
        if (inCart) {
            console.log("already in cart, quantity updated");
            product.quantity++;
            localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
        } else {
            product.quantity = 1;
            mainCart.push(product);
            localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
            console.log("added to cart");
        }
    });
});


// a partir de aqui tengo un error 

redirectButton.addEventListener("click", () => {
    window.location.href = "./productosCart.html";
});
