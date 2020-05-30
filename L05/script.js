"use strict";
/* -----------------------  GEMÄLDE -----------------------*/
let baum = {
    bild: "baum.jpg",
    titel: "Baum",
    text: "Baumgemälde in Braun- und Goldtönen",
    preis: "Preis: 50€"
};
let feder = {
    bild: "feder.jpg",
    titel: "Feder",
    text: "Schwarzgoldenes Federmotiv",
    preis: "Preis: 50€"
};
let dreieck = {
    bild: "dreieck.jpg",
    titel: "Dreiecke",
    text: "4 Gemälde in verschiedenen Grüntönen",
    preis: "Preis: 150€"
};
let fluegelg = {
    bild: "fluegel g.jpg",
    titel: "Goldene Flügel",
    text: "Goldene Flügel auf einem Marmorhintergrund",
    preis: "Preis: 60€"
};
let fluegel = {
    bild: "fluegel.jpg",
    titel: "Flügel",
    text: "Goldene Flügel auf schwarzen Hintergrund",
    preis: "Preis: 50€"
};
let gruen = {
    bild: "gruen.jpg",
    titel: "Grüner Drilling",
    text: "3 dekorative Gemälde mit Trendmuster",
    preis: "Preis: 150€"
};
let indianer = {
    bild: "indianer.jpg",
    titel: "Indiander",
    text: "Indianerfigur mit Goldakzenten",
    preis: "Preis: 60€"
};
let lips = {
    bild: "lips.jpg",
    titel: "Lips",
    text: "Schwarze Lippen mit Dollarmotiv",
    preis: "Preis: 50€"
};
let popart = {
    bild: "popart.jpg",
    titel: "Popart",
    text: "Popart Gemälde mit einem Spruch",
    preis: "Preis: 50€"
};
let sw = {
    bild: "sw.jpg",
    titel: "S/W",
    text: "2 minimalistische s/w Gemälde",
    preis: "Preis: 90€"
};
let tuerkis = {
    bild: "tuerkis.jpg",
    titel: "Türkis",
    text: "Gemälde Türkistönen und Goldakzenten",
    preis: "Preis: 50€"
};
let weiß = {
    bild: "weiß.jpg",
    titel: "Weiß",
    text: "Baumgemälde in Braun- und Goldtönen",
    preis: "Preis: 50€"
};
let herz = {
    bild: "herz.jpg",
    titel: "Herz",
    text: "Eine realistische Herzvase",
    preis: "Preis: 40€"
};
let hirsch = {
    bild: "hirsch.jpg",
    titel: "Hirsch",
    text: "Eine abstrakte eisenskulptur eines Hirsches",
    preis: "Preis: 70€"
};
let perle = {
    bild: "perle.jpg",
    titel: "Baum",
    text: "Abstrachierte Muschel mit Goldakzenten",
    preis: "Preis: 50€"
};
let koerper = {
    bild: "koerper.jpg",
    titel: "Körper",
    text: "Figuren die als Vase genutzt werden können",
    preis: "Preis: 15€"
};
let filz = {
    bild: "filz.jpg",
    titel: "Filzfigur",
    text: "Handgemachte vierbeinige Filzfigur",
    preis: "Preis: 90€"
};
let elefant = {
    bild: "elefant.jpg",
    titel: "Baum",
    text: "Aneinanderreihung von Elefantenköpfen",
    preis: "Preis: 150€"
};
let gold = {
    bild: "gold.jpg",
    titel: "Goldschalen",
    text: "Schalen auf Beton mit vergoldeter Innenseite",
    preis: "Preis: 150€"
};
let holz = {
    bild: "holz.jpg",
    titel: "Holzgesicht",
    text: "Holzstamm mit Gesicht als Blickfang",
    preis: "Preis: 180€"
};
let kugel = {
    bild: "kugel.jpg",
    titel: "Scheibe",
    text: "Gespaltene Scheibe mit schwarzer Kugel",
    preis: "Preis: 200€"
};
let skulp = {
    bild: "skulp.jpg",
    titel: "Griechischer Kopf",
    text: "Griechische Büste",
    preis: "Preis: 90€"
};
let zebra = {
    bild: "zebra.jpg",
    titel: "Zebra",
    text: "Aneinanderreihung von Zebraköpfen",
    preis: "Preis: 150€"
};
let vase = {
    bild: "vase.kopf.jpg",
    titel: "Vase mit Gesicht",
    text: "Vase in Wickeloptik und einem Gesichtsakzent",
    preis: "Preis: 90€"
};
let vogel = {
    bild: "vogel.jpg",
    titel: "Vögel",
    text: "Eisenmaske welche sich optisch in Vögel auflöst",
    preis: "Preis: 165€"
};
/* ----------------- ARRAYS ------------------- */
let gemälde = [baum, feder, dreieck, fluegelg, fluegel, gruen, indianer, lips, popart, sw, tuerkis, weiß];
let sculpture = [herz, hirsch, perle, koerper, filz, elefant, gold, holz, kugel, skulp, zebra, vase, vogel];
/* --------------- For Schleife zum generieren der Seite ------------------ */
//GEMÄLDE
for (let z = 0; z < gemälde.length; z++) {
    //DIV
    let div = document.createElement("div");
    div.id = "Gem" + z;
    div.setAttribute("class", "artikel");
    document.getElementById("Kategorie1")?.appendChild(div);
    //IMG
    let image = document.createElement("img");
    image.src = gemälde[z].bild;
    document.getElementById("Gem" + z)?.appendChild(image);
    //NAME
    let titel = document.createElement("p");
    titel.innerHTML = gemälde[z].titel;
    document.getElementById("Gem" + z)?.appendChild(titel);
    //DESCRIPTION
    let beschreibung = document.createElement("p");
    beschreibung.innerHTML = gemälde[z].text;
    document.getElementById("Gem" + z)?.appendChild(beschreibung);
    //PREIS
    let preis = document.createElement("p");
    preis.innerHTML = gemälde[z].preis;
    document.getElementById("Gem" + z)?.appendChild(preis);
    //BUY
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("Gem" + z)?.appendChild(kaufen);
}
//SKULPTURE
for (let z = 0; z < sculpture.length; z++) {
    //DIV
    let div = document.createElement("div");
    div.id = "Sculp" + z;
    div.setAttribute("class", "artikel");
    document.getElementById("Kategorie2")?.appendChild(div);
    //IMG
    let image = document.createElement("img");
    image.src = sculpture[z].bild;
    document.getElementById("Sculp" + z)?.appendChild(image);
    //NAME
    let titel = document.createElement("p");
    titel.innerHTML = sculpture[z].titel;
    document.getElementById("Sculp" + z)?.appendChild(titel);
    //DESCRIPTION
    let beschreibung = document.createElement("p");
    beschreibung.innerHTML = sculpture[z].text;
    document.getElementById("Sculp" + z)?.appendChild(beschreibung);
    //PREIS
    let preis = document.createElement("p");
    preis.innerHTML = sculpture[z].preis;
    document.getElementById("Sculp" + z)?.appendChild(preis);
    //BUY
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("Sculp" + z)?.appendChild(kaufen);
}
//# sourceMappingURL=script.js.map