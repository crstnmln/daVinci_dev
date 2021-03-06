"use strict";

class Product {
    constructor(id, source, alt, name, description, price) {
        this.id = id;
        this.source = source;
        this.alt = alt;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

const spiralNb = new Product(
    1,
    "./assets/cuaderno_20k.jpeg",
    "Cuaderno argollado",
    "Cuaderno Argollado",
    "Cuaderno cuadriculado 100 hojas",
    20000
);
const spiralNb2 = new Product(
    2,
    "./assets/cuaderno_21k.jpeg",
    "Cuaderno argollado 2",
    "Cuaderno Argollado",
    "Cuaderno cuadriculado 100 hojas",
    21000
);
const spiralNb3 = new Product(
    3,
    "./assets/cuaderno_22k.jpeg",
    "Cuaderno argollado 3",
    "Cuaderno Argollado",
    "Cuaderno cuadriculado 100 hojas",
    23000
);
const spiralNb4 = new Product(
    4,
    "./assets/cuaderno_24k.jpeg",
    "Cuaderno argollado 4",
    "Cuaderno Argollado",
    "Cuaderno cuadriculado 100 hojas",
    24000
);
const stiched = new Product(
    5,
    "./assets/cuaderno_norma_5k.jpg",
    "Cuaderno cosido",
    "Cuaderno Cosido",
    "Cuaderno cuadriculado 50 hojas",
    5000
);
const pencil = new Product(
    6,
    "./assets/lapiz_1k.jpeg",
    "Lápiz unidad",
    "Lápiz",
    'Lápiz Faber Castell "B"',
    1000
);
const markers = new Product(
    7,
    "./assets/sharpie_30k.jpeg",
    "Marcadores Sharpie",
    "Marcadores Sharpie",
    "Set de 8 marcadores doble punta",
    30000
);
const rubber = new Product(
    8,
    "./assets/borrador_500.jpeg",
    "Borrador unidad",
    "Borrador Pelikan",
    "Borrador de nata - Pelikan",
    500
);
const pen = new Product(
    9,
    "./assets/esfero_1k.png",
    "Esfero",
    "Esferos Bic",
    "Esfero Bic (Negro, Azul o Rojo)",
    1000
);
const paperReam = new Product(
    10,
    "./assets/Resma_11k.jpeg",
    "Resma de papel",
    "Resma de papel",
    "Resma de papel Reprograf color blanco",
    11000
);

/* let inventory = [
    spiralNb,
    spiralNb2,
    spiralNb3,
    spiralNb4,
    stiched,
    pencil,
    markers,
    rubber,
    pen,
    paperReam
]; */



let inventory;
/* .catch(function(error) {
console.log(error);
}); */

console.log(inventory);

let box = document.getElementById("box");
let boxPurchase = document.getElementById("boxPurchase");
let redirectButton = document.querySelector("#redirectButton");
let purchaseButton, cartButton;
let boxCart = document.getElementById("boxCart");
let mainCart = [];
let updatedCart;
let payBtn = document.getElementById(`divBtn`);
let total = 0;

/*
ejecucion para boton compra

inventory.forEach(({ id, source, alt, name, price }) => {
    purchaseButton = document.getElementById(`buy${id}`);
    purchaseButton.addEventListener("click", (event) => {
        console.log(event.target.id);
        boxPurchase.innerHTML = `
    <section class = "boxItem" id = "product${id}">
        <p>GRACIAS POR SU COMPRA</p>
        <img src="${source}" alt="${alt}" width="150" height="auto" />
        <h3>Has adquirido un ${name}</h3>
        <p>$ ${price}</p>
    </section>`;
    });
}); */


/* inventory.forEach((product) => {
    cartButton = document.getElementById(`addCart${product.id}`);
    cartButton.addEventListener("click", (event) => {
        // porque siempre cartButton.id me muestra addCart10 y porque no puedo hacer `addCart${product.id}` === cartButton.id
       
   
        let inCart = mainCart.some((product) => {
            return `addCart${product.id}` === event.target.id;
        });
        if (inCart) {
            mainCart.some((product) => {
            console.log("already in cart, quantity updated");
            console.log(product.quantity);
            product.quantity++;
            console.log(product.quantity);
            localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
        });
        } else {
            product.quantity = 1;
            mainCart.push(product);
            localStorage.setItem("cartOnBrowser", JSON.stringify(mainCart));
            console.log("added to cart");
        }
    
});

});
 */



