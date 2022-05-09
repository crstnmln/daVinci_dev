"use strict";

class Products {
    constructor(source, alt, name, description, price) {
        this.source = source;
        this.alt = alt;
        this.name = name;
        this.description = description;
        this.price = price;
    };
};

const argollado = new Products('./assets/cuaderno_20k.jpeg', 'Cuaderno argollado', 'Cuaderno Argollado', 'Cuaderno cuadriculado 100 hojas', 20000);
const argollado2 = new Products('./assets/cuaderno_21k.jpeg', 'Cuaderno argollado 2', 'Cuaderno Argollado', 'Cuaderno cuadriculado 100 hojas', 21000);
const argollado3 = new Products('./assets/cuaderno_22k.jpeg', 'Cuaderno argollado 3', 'Cuaderno Argollado', 'Cuaderno cuadriculado 100 hojas', 23000);
const argollado4 = new Products('./assets/cuaderno_24k.jpeg', 'Cuaderno argollado 4', 'Cuaderno Argollado', 'Cuaderno cuadriculado 100 hojas', 24000);
const cosido = new Products('./assets/cuaderno_norma_5k.jpg', 'Cuaderno cosido', 'Cuaderno Cosido', 'Cuaderno cuadriculado 50 hojas', 5000);
const lapiz = new Products('./assets/lapiz_1k.jpeg', 'Lápiz unidad', 'Lápiz', 'Lápiz Faber Castell "B"', 1000);
const marcadores = new Products('./assets/sharpie_30k.jpeg', 'Marcadores Sharpie', 'Marcadores Sharpie', 'Set de 8 marcadores doble punta', 30000);
const borrador = new Products('./assets/borrador_500.jpeg', 'Borrador unidad', 'Borrador Pelikan', 'Borrador de nata - Pelikan', 500);
const esfero = new Products('./assets/esfero_1k.png', 'Esfero', 'Esferos Bic', 'Esfero Bic (Negro, Azul o Rojo)', 1000);
const resmaPapel = new Products('./assets/Resma_11k.jpeg', 'Resma de papel', 'Resma de papel', 'Resma de papel Reprograf color blanco', 11000);

let inventory = [argollado, argollado2, argollado3, argollado4, cosido, lapiz, marcadores, borrador, esfero, resmaPapel];

let box = document.getElementById('box');


inventory.forEach(product => {
    box.innerHTML += `
    <section class="boxItem">
    <img src="${product.source}" alt="${product.alt}" width="150" height="auto" />
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>$ ${product.price}</p>
    </section>`
});

