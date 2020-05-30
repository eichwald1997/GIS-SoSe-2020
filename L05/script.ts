/* -----------------------  GEMÄLDE -----------------------*/




interface Gemälde {
    bild: string;
    titel: string;
    text: string;
    preis: string;
}


let baum: Gemälde = {
    bild: "baum.jpg",
    titel: "Baum",
    text: "Baumgemälde in Braun- und Goldtönen",
    preis: "Preis: 50€"
};

let feder: Gemälde = {
    bild: "feder.jpg",
    titel: "Feder",
    text: "Schwarzgoldenes Federmotiv",
    preis: "Preis: 50€"
};

let dreieck: Gemälde = {
    bild: "dreieck.jpg",
    titel: "Dreiecke",
    text: "4 Gemälde in verschiedenen Grüntönen",
    preis: "Preis: 150€"
};

let fluegelg: Gemälde = {
    bild: "fluegel g.jpg",
    titel: "Goldene Flügel",
    text: "Goldene Flügel auf einem Marmorhintergrund",
    preis: "Preis: 60€"
};

let fluegel: Gemälde = {
    bild: "fluegel.jpg",
    titel: "Flügel",
    text: "Goldene Flügel auf schwarzen Hintergrund",
    preis: "Preis: 50€"
};

let gruen: Gemälde = {
    bild: "gruen.jpg",
    titel: "Grüner Drilling",
    text: "3 dekorative Gemälde mit Trendmuster",
    preis: "Preis: 150€"
};

let indianer: Gemälde = {
    bild: "indianer.jpg",
    titel: "Indiander",
    text: "Indianerfigur mit Goldakzenten",
    preis: "Preis: 60€"
};

let lips: Gemälde = {
    bild: "lips.jpg",
    titel: "Lips",
    text: "Schwarze Lippen mit Dollarmotiv",
    preis: "Preis: 50€"
};

let popart: Gemälde = {
    bild: "popart.jpg",
    titel: "Popart",
    text: "Popart Gemälde mit einem Spruch",
    preis: "Preis: 50€"
};

let sw: Gemälde = {
    bild: "sw.jpg",
    titel: "S/W",
    text: "2 minimalistische s/w Gemälde",
    preis: "Preis: 90€"
};

let tuerkis: Gemälde = {
    bild: "tuerkis.jpg",
    titel: "Türkis",
    text: "Gemälde Türkistönen und Goldakzenten",
    preis: "Preis: 50€"
};

let weiß: Gemälde = {
    bild: "weiß.jpg",
    titel: "Weiß",
    text: "Baumgemälde in Braun- und Goldtönen",
    preis: "Preis: 50€"
};




/* -----------------------  SCULPTUREN -----------------------*/

interface Sculpture {
    bild: string;
    titel: string;
    text: string;
    preis: string;
}

let herz: Sculpture = {
    bild: "herz.jpg",
    titel: "Herz",
    text: "Eine realistische Herzvase",
    preis: "Preis: 40€"
};

let hirsch: Sculpture = {
    bild: "hirsch.jpg",
    titel: "Hirsch",
    text: "Eine abstrakte eisenskulptur eines Hirsches",
    preis: "Preis: 70€"
};

let perle: Sculpture = {
    bild: "perle.jpg",
    titel: "Baum",
    text: "Abstrachierte Muschel mit Goldakzenten",
    preis: "Preis: 50€"
};

let koerper: Sculpture = {
    bild: "koerper.jpg",
    titel: "Körper",
    text: "Figuren die als Vase genutzt werden können",
    preis: "Preis: 15€"
};

let filz: Sculpture = {
    bild: "filz.jpg",
    titel: "Filzfigur",
    text: "Handgemachte vierbeinige Filzfigur",
    preis: "Preis: 90€"
};

let elefant: Sculpture = {
    bild: "elefant.jpg",
    titel: "Baum",
    text: "Aneinanderreihung von Elefantenköpfen",
    preis: "Preis: 150€"
};

let gold: Sculpture = {
    bild: "gold.jpg",
    titel: "Goldschalen",
    text: "Schalen auf Beton mit vergoldeter Innenseite",
    preis: "Preis: 150€"
};

let holz: Sculpture = {
    bild: "holz.jpg",
    titel: "Holzgesicht",
    text: "Holzstamm mit Gesicht als Blickfang",
    preis: "Preis: 180€"
};

let kugel: Sculpture = {
    bild: "kugel.jpg",
    titel: "Scheibe",
    text: "Gespaltene Scheibe mit schwarzer Kugel",
    preis: "Preis: 200€"
};

let skulp: Sculpture = {
    bild: "skulp.jpg",
    titel: "Griechischer Kopf",
    text: "Griechische Büste",
    preis: "Preis: 90€"
};

let zebra: Sculpture = {
    bild: "zebra.jpg",
    titel: "Zebra",
    text: "Aneinanderreihung von Zebraköpfen",
    preis: "Preis: 150€"
};

let vase: Sculpture = {
    bild: "vase.kopf.jpg",
    titel: "Vase mit Gesicht",
    text: "Vase in Wickeloptik und einem Gesichtsakzent",
    preis: "Preis: 90€"
};

let vogel: Sculpture = {
    bild: "vogel.jpg",
    titel: "Vögel",
    text: "Eisenmaske welche sich optisch in Vögel auflöst",
    preis: "Preis: 165€"
};



/* ----------------- ARRAYS ------------------- */

let gemälde: Gemälde[] = [baum, feder, dreieck, fluegelg, fluegel, gruen, indianer, lips, popart, sw, tuerkis, weiß];
let sculpture: Sculpture[] = [herz, hirsch, perle, koerper, filz, elefant, gold, holz, kugel, skulp, zebra, vase, vogel];




/* --------------- For Schleife zum generieren der Seite ------------------ */

//GEMÄLDE
for (let z: number = 0; z < gemälde.length; z++) {
    //DIV
    let div: HTMLDivElement = document.createElement("div");
    div.id = "Gem" + z;
    div.setAttribute("class", "artikel");
    document.getElementById("Kategorie1")?.appendChild(div);

    //IMG
    let image: HTMLImageElement = document.createElement("img");
    image.src = gemälde[z].bild;
    document.getElementById("Gem" + z)?.appendChild(image);

    //NAME
    let titel: HTMLParagraphElement = document.createElement("p");
    titel.innerHTML = gemälde[z].titel;
    document.getElementById("Gem" + z)?.appendChild(titel);

    //DESCRIPTION
    let beschreibung: HTMLParagraphElement = document.createElement("p");
    beschreibung.innerHTML = gemälde[z].text;
    document.getElementById("Gem" + z)?.appendChild(beschreibung);

    //PREIS
    let preis: HTMLParagraphElement = document.createElement("p");
    preis.innerHTML = gemälde[z].preis;
    document.getElementById("Gem" + z)?.appendChild(preis);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("Gem" + z)?.appendChild(kaufen);
}

//SKULPTURE
for (let z: number = 0; z < sculpture.length; z++) {
    //DIV
    let div: HTMLDivElement = document.createElement("div");
    div.id = "Sculp" + z;
    div.setAttribute("class", "artikel");
    document.getElementById("Kategorie2")?.appendChild(div);

    //IMG
    let image: HTMLImageElement = document.createElement("img");
    image.src = sculpture[z].bild;
    document.getElementById("Sculp" + z)?.appendChild(image);

    //NAME
    let titel: HTMLParagraphElement = document.createElement("p");
    titel.innerHTML = sculpture[z].titel;
    document.getElementById("Sculp" + z)?.appendChild(titel);

    //DESCRIPTION
    let beschreibung: HTMLParagraphElement = document.createElement("p");
    beschreibung.innerHTML = sculpture[z].text;
    document.getElementById("Sculp" + z)?.appendChild(beschreibung);

    //PREIS
    let preis: HTMLParagraphElement = document.createElement("p");
    preis.innerHTML = sculpture[z].preis;
    document.getElementById("Sculp" + z)?.appendChild(preis);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("Sculp" + z)?.appendChild(kaufen);
}