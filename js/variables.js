"use strict";


class Products {
    constructor(id, source, alt, name, description, price) {
        this.id = id;
        this.source = source;
        this.alt = alt;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

const argollado = new Products(
    1,
    "./assets/cuaderno_20k.jpeg",
    "Cuaderno argollado",
    "Cuaderno Argollado",
    "Cuaderno cuadriculado 100 hojas",
    20000
);
const argollado2 = new Products(
    2,
    "./assets/cuaderno_21k.jpeg",
    "Cuaderno argollado 2",
    "Cuaderno Argollado",
    "Cuaderno cuadriculado 100 hojas",
    21000
);
const argollado3 = new Products(
    3,
    "./assets/cuaderno_22k.jpeg",
    "Cuaderno argollado 3",
    "Cuaderno Argollado",
    "Cuaderno cuadriculado 100 hojas",
    23000
);
const argollado4 = new Products(
    4,
    "./assets/cuaderno_24k.jpeg",
    "Cuaderno argollado 4",
    "Cuaderno Argollado",
    "Cuaderno cuadriculado 100 hojas",
    24000
);
const cosido = new Products(
    5,
    "./assets/cuaderno_norma_5k.jpg",
    "Cuaderno cosido",
    "Cuaderno Cosido",
    "Cuaderno cuadriculado 50 hojas",
    5000
);
const lapiz = new Products(
    6,
    "./assets/lapiz_1k.jpeg",
    "Lápiz unidad",
    "Lápiz",
    'Lápiz Faber Castell "B"',
    1000
);
const marcadores = new Products(
    7,
    "./assets/sharpie_30k.jpeg",
    "Marcadores Sharpie",
    "Marcadores Sharpie",
    "Set de 8 marcadores doble punta",
    30000
);
const borrador = new Products(
    8,
    "./assets/borrador_500.jpeg",
    "Borrador unidad",
    "Borrador Pelikan",
    "Borrador de nata - Pelikan",
    500
);
const esfero = new Products(
    9,
    "./assets/esfero_1k.png",
    "Esfero",
    "Esferos Bic",
    "Esfero Bic (Negro, Azul o Rojo)",
    1000
);
const resmaPapel = new Products(
    10,
    "./assets/Resma_11k.jpeg",
    "Resma de papel",
    "Resma de papel",
    "Resma de papel Reprograf color blanco",
    11000
);

let inventory = [
    argollado,
    argollado2,
    argollado3,
    argollado4,
    cosido,
    lapiz,
    marcadores,
    borrador,
    esfero,
    resmaPapel,
];
let box = document.getElementById("box");
let boxPurchase = document.getElementById("boxPurchase");
let redirectButton = document.querySelector("#redirectButton");
let purchaseButton, cartButton;
let boxCart = document.getElementById("boxCart");
let mainCart = [];
let updatedCart;

