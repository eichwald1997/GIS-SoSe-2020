"use strict";
//Gemälde
let baum = {
    bild: "baum.jpg",
    titel: "Baum",
    text: "Baumgemälde in Braun- und Goldtönen",
    preis: 50,
    kat: "gemälde"
};
let feder = {
    bild: "feder.jpg",
    titel: "Feder",
    text: "Schwarzgoldenes Federmotiv",
    preis: 55,
    kat: "gemälde"
};
let dreieck = {
    bild: "dreieck.jpg",
    titel: "Dreiecke",
    text: "4 Gemälde in verschiedenen Grüntönen",
    preis: 150,
    kat: "gemälde"
};
let fluegelg = {
    bild: "fluegel g.jpg",
    titel: "Goldene Flügel",
    text: "Goldene Flügel auf einem Marmorhintergrund",
    preis: 60,
    kat: "gemälde"
};
let fluegel = {
    bild: "fluegel.jpg",
    titel: "Flügel",
    text: "Goldene Flügel auf schwarzen Hintergrund",
    preis: 70,
    kat: "gemälde"
};
let gruen = {
    bild: "gruen.jpg",
    titel: "Grüner Drilling",
    text: "3 dekorative Gemälde mit Trendmuster",
    preis: 150,
    kat: "gemälde"
};
let indianer = {
    bild: "indianer.jpg",
    titel: "Indiander",
    text: "Indianerfigur mit Goldakzenten",
    preis: 60,
    kat: "gemälde"
};
let lips = {
    bild: "lips.jpg",
    titel: "Lips",
    text: "Schwarze Lippen mit Dollarmotiv",
    preis: 50,
    kat: "gemälde"
};
let popart = {
    bild: "popart.jpg",
    titel: "Popart",
    text: "Popart Gemälde mit einem Spruch",
    preis: 65,
    kat: "gemälde"
};
let sw = {
    bild: "sw.jpg",
    titel: "S/W",
    text: "2 minimalistische s/w Gemälde",
    preis: 90,
    kat: "gemälde"
};
let tuerkis = {
    bild: "tuerkis.jpg",
    titel: "Türkis",
    text: "Gemälde Türkistönen und Goldakzenten",
    preis: 75,
    kat: "gemälde"
};
let weiß = {
    bild: "weiß.jpg",
    titel: "Weiß",
    text: "Baumgemälde in Braun- und Goldtönen",
    preis: 50,
    kat: "gemälde"
};
//Skulpturen
let herz = {
    bild: "herz.jpg",
    titel: "Herz",
    text: "Eine realistische Herzvase",
    preis: 40,
    kat: "skulpturen"
};
let hirsch = {
    bild: "hirsch.jpg",
    titel: "Hirsch",
    text: "Eine abstrakte eisenskulptur eines Hirsches",
    preis: 70,
    kat: "skulpturen"
};
let perle = {
    bild: "perle.jpg",
    titel: "Baum",
    text: "Abstrachierte Muschel mit Goldakzenten",
    preis: 50,
    kat: "skulpturen"
};
let koerper = {
    bild: "koerper.jpg",
    titel: "Körper",
    text: "Figuren die als Vase genutzt werden können",
    preis: 15,
    kat: "skulpturen"
};
let filz = {
    bild: "filz.jpg",
    titel: "Filzfigur",
    text: "Handgemachte vierbeinige Filzfigur",
    preis: 90,
    kat: "skulpturen"
};
let elefant = {
    bild: "elefant.jpg",
    titel: "Baum",
    text: "Aneinanderreihung von Elefantenköpfen",
    preis: 150,
    kat: "skulpturen"
};
let gold = {
    bild: "gold.jpg",
    titel: "Goldschalen",
    text: "Schalen auf Beton mit vergoldeter Innenseite",
    preis: 150,
    kat: "skulpturen"
};
let holz = {
    bild: "holz.jpg",
    titel: "Holzgesicht",
    text: "Holzstamm mit Gesicht als Blickfang",
    preis: 180,
    kat: "skulpturen"
};
let kugel = {
    bild: "kugel.jpg",
    titel: "Scheibe",
    text: "Gespaltene Scheibe mit schwarzer Kugel",
    preis: 200,
    kat: "skulpturen"
};
let skulp = {
    bild: "skulp.jpg",
    titel: "Griechischer Kopf",
    text: "Griechische Büste",
    preis: 90,
    kat: "skulpturen"
};
let zebra = {
    bild: "zebra.jpg",
    titel: "Zebra",
    text: "Aneinanderreihung von Zebraköpfen",
    preis: 150,
    kat: "skulpturen"
};
let vase = {
    bild: "vase.kopf.jpg",
    titel: "Vase mit Gesicht",
    text: "Vase in Wickeloptik und einem Gesichtsakzent",
    preis: 90,
    kat: "skulpturen"
};
let vogel = {
    bild: "vogel.jpg",
    titel: "Vögel",
    text: "Eisenmaske welche sich optisch in Vögel auflöst",
    preis: 165,
    kat: "skulpturen"
};
/* ----------------- ARRAY ------------------- */
let kunst = [baum, feder, dreieck, fluegelg, fluegel, gruen, indianer, lips, popart, sw, tuerkis, weiß, herz, hirsch, perle, koerper, filz, elefant, gold, holz, kugel, skulp, zebra, vase, vogel];
//Seite generieren nur mit einer For-schleife für beide Kategorien
for (let z = 0; z < kunst.length; z++) {
    let zuordnen1;
    let zuordnen2;
    if (kunst[z].kat == "gemälde") { //Zuordnung der richtigen Kategorie
        zuordnen1 = "Kategorie1";
        zuordnen2 = "Gem";
    }
    else {
        zuordnen1 = "Kategorie2";
        zuordnen2 = "Sculp";
    }
    //div
    let div = document.createElement("div");
    div.setAttribute("class", "artikel");
    document.getElementById(zuordnen1)?.appendChild(div);
    div.setAttribute("z", z.toString());
    //Bild
    let image = document.createElement("img");
    image.src = kunst[z].bild;
    document.getElementById(zuordnen2 + z)?.appendChild(image);
    div.appendChild(image);
    //Überschrift
    let titel = document.createElement("p");
    titel.innerHTML = kunst[z].titel;
    document.getElementById(zuordnen2 + z)?.appendChild(titel);
    div.appendChild(titel);
    //Beschreibung
    let beschreibung = document.createElement("p");
    beschreibung.innerHTML = kunst[z].text;
    document.getElementById(zuordnen2 + z)?.appendChild(beschreibung);
    div.appendChild(beschreibung);
    //Preis
    let preis = document.createElement("p");
    preis.innerHTML = kunst[z].preis.toFixed(2) + "€";
    document.getElementById(zuordnen2 + z)?.appendChild(preis);
    div.appendChild(preis);
    //Button
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    div.appendChild(kaufen);
    kaufen.addEventListener("click", zählenUndRechnen); //Event für Teilaufgabe1
}
/* ---- TEILAUFGABE1 ----------*/
let einkaufswagenWert = 0; //Variable für das Icon Einkaufswagen      
let kreis = document.createElement("div"); //div ertsellt namens "kreis"
kreis.id = "kreis";
let wertErstellen = document.createElement("p"); //p Element unter dem div "kreis" erstellt
let berechnen = 0; //Variable für Consolenrechnung
function zählenUndRechnen(_event) {
    if (einkaufswagenWert >= 0) { //Startet ab 1 mal clicken
        document.getElementById("Zähler")?.appendChild(kreis);
    }
    einkaufswagenWert++;
    wertErstellen.innerHTML = "" + einkaufswagenWert;
    document.getElementById("kreis")?.appendChild(wertErstellen);
    //Zusammenrechnen der clicks in der Console
    let attributWert = _event.currentTarget.parentElement.getAttribute("z");
    let preisWert = parseInt(attributWert);
    berechnen = berechnen + kunst[preisWert].preis;
    console.log(berechnen);
}
//# sourceMappingURL=script.js.map