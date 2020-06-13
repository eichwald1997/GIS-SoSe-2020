

interface Kunst {
    bild: string;
    titel: string;
    text: string;
    preis: number;              //Preis in number geändert
    kat: string;                //Kategorie hinzugefügt --> Siehe for-Schleife!
}

//Gemälde

let baum: Kunst = {
    bild: "baum.jpg",
    titel: "Baum",
    text: "Baumgemälde in Braun- und Goldtönen",
    preis: 50,
    kat: "gemälde"
};

let feder: Kunst = {
    bild: "feder.jpg",
    titel: "Feder",
    text: "Schwarzgoldenes Federmotiv",
    preis: 55,
    kat: "gemälde"
};

let dreieck: Kunst = {
    bild: "dreieck.jpg",
    titel: "Dreiecke",
    text: "4 Gemälde in verschiedenen Grüntönen",
    preis: 150,
    kat: "gemälde"
};

let fluegelg: Kunst = {
    bild: "fluegel g.jpg",
    titel: "Goldene Flügel",
    text: "Goldene Flügel auf einem Marmorhintergrund",
    preis: 60,
    kat: "gemälde"
};

let fluegel: Kunst = {
    bild: "fluegel.jpg",
    titel: "Flügel",
    text: "Goldene Flügel auf schwarzen Hintergrund",
    preis: 70,
    kat: "gemälde"
};

let gruen: Kunst = {
    bild: "gruen.jpg",
    titel: "Grüner Drilling",
    text: "3 dekorative Gemälde mit Trendmuster",
    preis: 150,
    kat: "gemälde"
};

let indianer: Kunst = {
    bild: "indianer.jpg",
    titel: "Indiander",
    text: "Indianerfigur mit Goldakzenten",
    preis: 60,
    kat: "gemälde"
};

let lips: Kunst = {
    bild: "lips.jpg",
    titel: "Lips",
    text: "Schwarze Lippen mit Dollarmotiv",
    preis: 50,
    kat: "gemälde"
};

let popart: Kunst = {
    bild: "popart.jpg",
    titel: "Popart",
    text: "Popart Gemälde mit einem Spruch",
    preis: 65,
    kat: "gemälde"
};

let sw: Kunst = {
    bild: "sw.jpg",
    titel: "S/W",
    text: "2 minimalistische s/w Gemälde",
    preis: 90,
    kat: "gemälde"
};

let tuerkis: Kunst = {
    bild: "tuerkis.jpg",
    titel: "Türkis",
    text: "Gemälde Türkistönen und Goldakzenten",
    preis: 75,
    kat: "gemälde"
};

let weiß: Kunst = {
    bild: "weiß.jpg",
    titel: "Weiß",
    text: "Baumgemälde in Braun- und Goldtönen",
    preis: 50,
    kat: "gemälde"
};

//Skulpturen

let herz: Kunst = {
    bild: "herz.jpg",
    titel: "Herz",
    text: "Eine realistische Herzvase",
    preis: 40,
    kat: "skulpturen"
};

let hirsch: Kunst = {
    bild: "hirsch.jpg",
    titel: "Hirsch",
    text: "Eine abstrakte eisenskulptur eines Hirsches",
    preis: 70,
    kat: "skulpturen"
};

let perle: Kunst = {
    bild: "perle.jpg",
    titel: "Baum",
    text: "Abstrachierte Muschel mit Goldakzenten",
    preis: 50,
    kat: "skulpturen"
};

let koerper: Kunst = {
    bild: "koerper.jpg",
    titel: "Körper",
    text: "Figuren die als Vase genutzt werden können",
    preis: 15,
    kat: "skulpturen"
};

let filz: Kunst = {
    bild: "filz.jpg",
    titel: "Filzfigur",
    text: "Handgemachte vierbeinige Filzfigur",
    preis: 90,
    kat: "skulpturen"
};

let elefant: Kunst = {
    bild: "elefant.jpg",
    titel: "Baum",
    text: "Aneinanderreihung von Elefantenköpfen",
    preis: 150,
    kat: "skulpturen"
};

let gold: Kunst = {
    bild: "gold.jpg",
    titel: "Goldschalen",
    text: "Schalen auf Beton mit vergoldeter Innenseite",
    preis: 150,
    kat: "skulpturen"
};

let holz: Kunst = {
    bild: "holz.jpg",
    titel: "Holzgesicht",
    text: "Holzstamm mit Gesicht als Blickfang",
    preis: 180,
    kat: "skulpturen"
};

let kugel: Kunst = {
    bild: "kugel.jpg",
    titel: "Scheibe",
    text: "Gespaltene Scheibe mit schwarzer Kugel",
    preis: 200,
    kat: "skulpturen"
};

let skulp: Kunst = {
    bild: "skulp.jpg",
    titel: "Griechischer Kopf",
    text: "Griechische Büste",
    preis: 90,
    kat: "skulpturen"
};

let zebra: Kunst = {
    bild: "zebra.jpg",
    titel: "Zebra",
    text: "Aneinanderreihung von Zebraköpfen",
    preis: 150,
    kat: "skulpturen"
};

let vase: Kunst = {
    bild: "vase.kopf.jpg",
    titel: "Vase mit Gesicht",
    text: "Vase in Wickeloptik und einem Gesichtsakzent",
    preis: 90,
    kat: "skulpturen"
};

let vogel: Kunst = {
    bild: "vogel.jpg",
    titel: "Vögel",
    text: "Eisenmaske welche sich optisch in Vögel auflöst",
    preis: 165,
    kat: "skulpturen"
};



/* ----------------- ARRAY ------------------- */

let kunst: Kunst[] = [baum, feder, dreieck, fluegelg, fluegel, gruen, indianer, lips, popart, sw, tuerkis, weiß, herz, hirsch, perle, koerper, filz, elefant, gold, holz, kugel, skulp, zebra, vase, vogel];



//Seite generieren nur mit einer For-schleife für beide Kategorien
for (let z: number = 0; z < kunst.length; z++) {

    let zuordnen1: string;
    let zuordnen2: string;

    if (kunst[z].kat == "gemälde") {                        //Zuordnung der richtigen Kategorie
        zuordnen1 = "Kategorie1";
        zuordnen2 = "Gem";
    } else {
        zuordnen1 = "Kategorie2";
        zuordnen2 = "Sculp";
    }
    //div
    let div: HTMLDivElement = document.createElement("div");
    div.setAttribute("class", "artikel");
    document.getElementById(zuordnen1)?.appendChild(div);
    div.setAttribute("z", z.toString());

    //Bild
    let image: HTMLImageElement = document.createElement("img");
    image.src = kunst[z].bild;
    document.getElementById(zuordnen2 + z)?.appendChild(image);
    div.appendChild(image);

    //Überschrift
    let titel: HTMLParagraphElement = document.createElement("p");
    titel.innerHTML = kunst[z].titel;
    document.getElementById(zuordnen2 + z)?.appendChild(titel);
    div.appendChild(titel);

    //Beschreibung
    let beschreibung: HTMLParagraphElement = document.createElement("p");
    beschreibung.innerHTML = kunst[z].text;
    document.getElementById(zuordnen2 + z)?.appendChild(beschreibung);
    div.appendChild(beschreibung);

    //Preis
    let preis: HTMLParagraphElement = document.createElement("p");
    preis.innerHTML = kunst[z].preis.toFixed(2) + "€";
    document.getElementById(zuordnen2 + z)?.appendChild(preis);
    div.appendChild(preis);

    //Button
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    div.appendChild(kaufen);
    kaufen.addEventListener("click", zählenUndRechnen);   //Event für Teilaufgabe1
}

/* ---- TEILAUFGABE1 ----------*/

let einkaufswagenWert: number = 0;                                          //Variable für das Icon Einkaufswagen      
let kreis: HTMLDivElement = document.createElement("div");                  //div ertsellt namens "kreis"
kreis.id = "kreis";
let wertErstellen: HTMLParagraphElement = document.createElement("p");      //p Element unter dem div "kreis" erstellt
let berechnen: number = 0;                                                //Variable für Consolenrechnung

function zählenUndRechnen(_event: Event): void {    //Funktion eingebetet in einem eventlistener bei den buttons

   
    if (einkaufswagenWert >= 0) {   //Startet ab 1 mal clicken
        document.getElementById("Zähler")?.appendChild(kreis);
    }
    einkaufswagenWert++;
    wertErstellen.innerHTML = "" + einkaufswagenWert;
    document.getElementById("kreis")?.appendChild(wertErstellen);

    //Zusammenrechnen der clicks in der Console
    let attributWert: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("z")!;
    let preisWert: number = parseInt(attributWert);
    berechnen = berechnen + kunst[preisWert].preis;
    console.log(berechnen);
}