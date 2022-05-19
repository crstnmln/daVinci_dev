"use strict";

!localStorage.getItem("cartOnBrowser")
    ? (localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart)),
        updatedCart = JSON.parse(localStorage.getItem("cartOnBrowser")),
        console.log(updatedCart))
    : updatedCart = JSON.parse(localStorage.getItem("cartOnBrowser"))
        console.log(updatedCart)
        console.log('entro por que si encontró local');
//updatedCart = JSON.parse(localStorage.getItem("cartOnBrowser"));

console.log(updatedCart.length);

if (updatedCart.length > 0) {
    console.log("entro en true");
    updatedCart.forEach((product) => {

        let {id, source, alt, name, description, price, quantity} = product;

        boxCart.innerHTML += `
            <section class = "boxItem" id ="boxItem${id}">
            <img src="${source}" alt="${alt}" width="150" height="auto" />
            <h3>${name}</h3>
            <p>${description}</p>
            <p>$ ${price}</p>
            <p>Cantidad de articulos: ${quantity}</p>
            <input type="button" value="eliminar uno" id = "delCart${id}">
        </section>`;
    });
} else if (updatedCart.length === 0 || !updatedCart || updatedCart == null) {
    console.log("entro en false - el carrito esta vacio");
    boxCart.innerHTML += `
        <section class = "boxItem" >
            <h3>Carrito Vacio</h3>
        </section>`;
}

/* updatedCart.forEach((product) => {
    let delButton = document.getElementById(`delCart${product.id}`);
    delButton.addEventListener("click", (event) => {
        // porque siempre cartButton.id me muestra addCart10 y porque no puedo hacer `addCart${product.id}` === cartButton.id

        let inCart = mainCart.some((product) => {
            return `delCart${product.id}` === event.target.id;
        });
        if (inCart) {   
            console.log("removing item in cart, quantity updated");
            mainCart.forEach((item) => {
               if (product.id === item.id){
                item.quantity--;
                console.log(item.quantity);
               }
            })
            localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
        } /* else {
            product.quantity = 1;
            mainCart.push(product);
            localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
            console.log("added to cart");
        } 
    });
});
 */

/* updatedCart.forEach((product) => {
    let del = document.getElementById(`del${product.id}`);
    del.addEventListener("click", () => {

        if (product.quantity === 1){
            console.log('se tiene que borrar el producto');
        }
        else if(product.quantity > 1){
            product.quantity--;
            localStorage.setItem("cartOnBrowser", JSON.stringify(updatedCart));
            /* const delElement = document.getElementById(`boxItem${product.id}`);
            delElement.remove();
            boxCart.innerHTML += '';
            boxCart.innerHTML += `
            <section class = "boxItem" id ="boxItem${product.id}">
            <img src="${product.source}" alt="${product.alt}" width="150" height="auto" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$ ${product.price}</p>
            <p>Cantidad de articulos: ${product.quantity}</p>
            <input type="button" value="Eliminar 1" id = "del${product.id}">
            <input type="button" value="Eliminar Todo" id = "delAll${product.id}">
        </section>`;
        }

    });

}) */

/*

<input type="button" value="Eliminar 1" id = "del${product.id}">
<input type="button" value="Eliminar Todo" id = "delAll${product.id}">  */

//check 1:14:28  - Workshop 1