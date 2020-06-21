"use strict";
//Teilaufgabe 2 habe ich leider immer noch nicht hinbekommen, ich habe mich wirklich angestrengt und bin letzendlich doch verzweifelt.
if (!localStorage.getItem("Warenkorb")) {
    localStorage.setItem("Warenkorb", "[]");
}
let kunst = [];
async function communicate(_url) {
    let response = await fetch(_url);
    let v = await response.json();
    kunst = v;
    console.log("Response", v);
}
async function load() {
    console.log("Loos gehts");
    await communicate("content.json");
    console.log("Ende");
    generieren();
}
load();
function generieren() {
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
}
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