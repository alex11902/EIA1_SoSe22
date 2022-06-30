var Stufe_1 = [
    {
        de: ["Mein name ist Alex"],
        es: ["Me", "llamo", "Alex"],
        num: [1]
    },
    {
        de: ["Ich komme aus Bonn"],
        es: ["Soy", "de", "Bonn"],
        num: [2]
    },
    {
        de: ["Ich mag geld"],
        es: ["Me", "gusto", "dinero"],
        num: [3]
    },
    {
        de: ["Ich bin dreiundzwanzig jahre alt"],
        es: ["Tengo", "veintitres", "anos"],
        num: [4]
    },
    {
        de: ["Ich Studiere Medienkonzeption"],
        es: ["Estudio", "el concepcion", "del Media"],
        num: [5]
    },
    {
        de: ["gehen wir!"],
        es: ["Vamonos!"],
        num: [6]
    },
    {
        de: ["Bis zum naechsten mal"],
        es: ["Hasta", "la", "proxima", "vez"],
        num: [7]
    },
    {
        de: ["Ich trage ein braunes hemd"],
        es: ["llevo", "una", "camiseta", "marron"],
        num: [8]
    },
    {
        de: ["Gib mir 100 euro"],
        es: ["Dame", "ciento", "euros"],
        num: [9]
    },
    {
        de: ["Dort gibt es Sachen"],
        es: ["Aquel", "tiene", "cosas"],
        num: [10]
    },
    {
        de: ["Es ist heiß"],
        es: ["Hace", "calor"],
        num: [11]
    },
    {
        de: ["Ich habe durst"],
        es: ["estoy", "sediento"],
        num: [12]
    },
    {
        de: ["hilf mir"],
        es: ["ayudame", "dame"],
        num: [13]
    },
    {
        de: ["Wieviel geld hast du?"],
        es: ["Cuantos", "dinero", "tienes"],
        num: [14]
    },
    {
        de: ["Warum hast du kein auto?"],
        es: ["porque", "no", "tienes", "un", "coche"],
        num: [15]
    }
];
window.addEventListener('load', startscreen);
//startscreen
//initialisierung von variablen, abkurzungen und anderen dingen
var textbox = document.getElementById("textbox");
var datenbox = document.getElementById("datenbox");
var leicht = document.getElementById("Leicht");
var mittel = document.getElementById("Mittel");
var schwer = document.getElementById("Schwer");
var create_textbox = document.createElement("p");
var totranslate = document.createElement("p");
var translate = document.createElement("p");
var randint = Math.floor(Math.random() * Stufe_1.length);
function startscreen() {
    //create_onbox.innerHTML = "Hola,  Hacemos!";
    //create_onbox.setAttribute("style","font-family: impact; text-align:center;")
    create_textbox.innerHTML = "Hallo!";
    create_textbox.setAttribute("style", "font-family:impact,Arial; text-align:center;color:#057aa8; font-size:38px; top:50%;left:50%; ");
    document.getElementById("textbox").appendChild(create_textbox);
    schwierigkeitsstufenauswahl();
}
function schwierigkeitsstufenauswahl() {
    document.getElementById("textbox").appendChild(leicht);
    leicht.addEventListener('click', Level_1);
    document.getElementById("textbox").appendChild(mittel);
    mittel.addEventListener('click', Level_2);
    document.getElementById("textbox").appendChild(schwer);
    schwer.addEventListener('click', Level_3);
}
//initialisierung von elementen damit nix redundant ist
function Level_1() {
    leicht.remove();
    mittel.remove();
    schwer.remove();
    create_textbox.remove();
    totranslate.innerHTML = random_item(Stufe_1[randint].de);
    totranslate.setAttribute("style", "font-family:arial; text-align:center;font-size:28px;color:#057aa8;padding-top:30%;font-weight:bolder;");
    textbox.appendChild(totranslate);
    for (var index = 0; index < random_item(Stufe_1[randint].es.length); index++) {
        var element = Stufe_1[index];
        console.log(index);
    }
    var x = random_item(Stufe_1[randint].es.length);
    translate.innerHTML = random_item(Stufe_1[randint].es);
    translate.setAttribute("style", "font-family:arial; text-align:center;font-size:28px;color:rebeccapurple;padding-top:75px;font-weight:bolder;");
    datenbox.appendChild(translate);
    //console.log(x)
}
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function Level_2() {
    leicht.remove();
    mittel.remove();
    schwer.remove();
    create_textbox.remove();
    totranslate.innerHTML = random_item(Stufe_1[randint].de);
    totranslate.setAttribute("style", "font-family:arial; text-align:center;font-size:28px;color:#057aa8;padding-top:30%;font-weight:bolder;");
    textbox.appendChild(totranslate);
    for (var index = 0; index < random_item(Stufe_1[randint].es.length); index++) {
        var element = Stufe_1[index];
        console.log(index);
    }
    var x = random_item(Stufe_1[randint].es.length);
    translate.innerHTML = random_item(Stufe_1[randint].es);
    translate.setAttribute("style", "font-family:arial; text-align:center;font-size:28px;color:rebeccapurple;padding-top:75px;font-weight:bolder;");
    datenbox.appendChild(translate);
}
function Level_3() {
    leicht.remove();
    mittel.remove();
    schwer.remove();
    create_textbox.remove();
    totranslate.innerHTML = random_item(Stufe_1[randint].de);
    totranslate.setAttribute("style", "font-family:arial; text-align:center;font-size:28px;color:#057aa8;padding-top:30%;font-weight:bolder;");
    textbox.appendChild(totranslate);
    for (var index = 0; index < random_item(Stufe_1[randint].es.length); index++) {
        var element = Stufe_1[index];
        console.log(index);
    }
    var x = random_item(Stufe_1[randint].es.length);
    translate.innerHTML = random_item(Stufe_1[randint].es);
    translate.setAttribute("style", "font-family:arial; text-align:center;font-size:28px;color:rebeccapurple;padding-top:75px;font-weight:bolder;");
    datenbox.appendChild(translate);
}
var arr = [
    { id: 1, name: 'Tom' },
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Nick' },
    { id: 2, name: 'Nick' },
];
var uniqueIds = [];
var unique = Stufe_1.filter(function (element) {
    var isDuplicate = uniqueIds.includes(element.num);
    if (!isDuplicate) {
        uniqueIds.push(element.num);
        return true;
    }
    return false;
});
function equals(a, b) {
    return a.length === b.length &&
        a.every(function (v, i) { return v === b[i]; });
}
// durcheinanerbringer funktion
function shuffle(Arr) {
    var _a;
    var currentIndex = Arr.length, randomIndex;
    // Wenn noch objekte zum durchwuseln sind
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        _a = [
            Arr[randomIndex], Arr[currentIndex]
        ], Arr[currentIndex] = _a[0], Arr[randomIndex] = _a[1];
    }
    return Arr;
}
// testen der vergleichfunktion
//if( equals( Stufe_1[1].es, Comparethis[1].es) == true ){
//}
//console.log(shuffle(Stufe_1[].de));
