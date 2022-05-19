"use strict";

(localStorage.getItem("cartOnBrowser")) ? (
    mainCart = JSON.parse(localStorage.getItem("cartOnBrowser")),
    console.log('entro en productos y que si tiene local'))
    : localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));


inventory.forEach((product) => {

    let { id, source, alt, name, description, price } = product;

    box.innerHTML += `
    <section class = "boxItem" id = "product${id}">
        <img src="${source}" alt="${alt}" width="150" height="auto" />
        <h3>${name}</h3>
        <p>${description}</p>
        <p>$ ${price}</p>
        <input type="button" value="Agregar al carrito" id = "addCart${id}">
    </section>`;
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
            mainCart.forEach((item) => {
               if (product.id === item.id){
                item.quantity++;
                console.log(item.quantity);
               }
            })
        
            localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
        } else {
            product.quantity = 1;
            mainCart.push(product);
            localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
            console.log("added to cart");
        }
    });
});



/* redirectButton.addEventListener("click", () => {
    
});  */