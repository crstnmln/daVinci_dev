"use strict";

if (!localStorage.getItem("cartOnBrowser")) {
    localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
    updatedCart = JSON.parse(localStorage.getItem("cartOnBrowser"));
}else{
    updatedCart = JSON.parse(localStorage.getItem("cartOnBrowser"));
}

//updatedCart = JSON.parse(localStorage.getItem("cartOnBrowser"));

console.log(updatedCart.length);

if (updatedCart.length > 0) {
    console.log("entro en true");
    updatedCart.forEach((product) => {
        //en consola recibo un error que boxCart es null 
        boxCart.innerHTML += `
            <section class = "boxItem" id ="boxItem${product.id}">
            <img src="${product.source}" alt="${product.alt}" width="150" height="auto" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$ ${product.price}</p>
            <p>Cantidad de articulos: ${product.quantity}</p>
            
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