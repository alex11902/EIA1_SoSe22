
const names = {
    de:     "germany",
    esp:    "spain",
    it:     "italy",
    fra:    "france"
}

const eu = {
    EUR: "Europa",
    EUR_21: 447,
    EUR_08: 440,

    DE: "Deutschland",
    GER_21: 83.2,
    GER_08: 82.0,

    ITA: "Italien",
    ITA_21: 59.58,
    ITA_08: 59.0,

    FRA: "Frankreich",
    FRA_21: 65.3,
    FRA_08: 62.14,

    ESP: "Spanien",
    ESP_21: 47.16,
    ESP_08: 45.98

}

function europa()
{
    document.getElementById("einwohner").innerHTML = `${eu.EUR_21} Millionen Einwohner hat die Europäische Union`;
    document.getElementById("country").innerHTML = eu.EUR;

    document.getElementById("relativ").innerHTML = `${Math.abs((eu.EUR_21 / eu.EUR_21) * 100).toFixed(1)} %`;
    document.getElementById("wachstum").innerHTML = `${Math.abs(eu.EUR_08 / eu.EUR_21).toFixed(1)}%`;
    document.getElementById("gesamt").innerHTML= `${Math.abs(eu.EUR_21 - eu.EUR_08).toFixed(1)} %`;
}

function de()
{
    document.getElementById("einwohner").innerHTML = `${eu.GER_21} Millionen Einwohner hat ${eu.DE}` ;
    document.getElementById("country").innerHTML = eu.DE;

    document.getElementById("relativ").innerHTML = `${Math.abs((eu.GER_21 / eu.EUR_21) * 100).toFixed(1)}%`;
    document.getElementById("wachstum").innerHTML = `${Math.abs(eu.GER_08 / eu.GER_21).toFixed(1)}%`;
    document.getElementById("gesamt").innerHTML= `${Math.abs(eu.GER_21 - eu.GER_08).toFixed(1)}%`;
    
    const chart  = (eu.GER_21/eu.EUR_21)*100;
    document.querySelector(".chart").setAttribute("style", `height: ${chart}%`);

}


function fra()
{
    document.getElementById("einwohner").innerHTML = `${eu.FRA_21} Millionen Einwohner hat ${eu.FRA}` ;
    document.getElementById("country").innerHTML = eu.FRA;

    document.getElementById("relativ").innerHTML = `${Math.abs((eu.FRA_21 / eu.EUR_21) * 100).toFixed(1)}%`;
    document.getElementById("wachstum").innerHTML = `${Math.abs(eu.FRA_08 / eu.FRA_21).toFixed(1)}%`;
    document.getElementById("gesamt").innerHTML= `${Math.abs(eu.FRA_21 - eu.FRA_08).toFixed(1)}%`;
    
    const chart  = (eu.FRA_21/eu.EUR_21)*100;
    document.querySelector(".chart").setAttribute("style", `height: ${chart}%`);

}

function esp()
{
    document.getElementById("einwohner").innerHTML = `${eu.ESP_21} Einwohner hat ${eu.ESP}` ;
    document.getElementById("country").innerHTML = eu.ESP;

    document.getElementById("relativ").innerHTML = `${Math.abs((eu.ESP_21 / eu.EUR_21) * 100).toFixed(1)}%`;
    document.getElementById("wachstum").innerHTML = `${Math.abs(eu.ESP_08 / eu.GER_21).toFixed(1)}%`;
    document.getElementById("gesamt").innerHTML= `${Math.abs(eu.ESP_21 - eu.GER_08).toFixed(1)}%`;
    
    const chart  = (eu.ESP_21/eu.EUR_21)*100;
    document.querySelector(".chart").setAttribute("style", `height: ${chart}%`);

}

function it()
{
    document.getElementById("einwohner").innerHTML = `${eu.ITA_21} Millionen Einwohner hat ${eu.ITA}` ;
    document.getElementById("country").innerHTML = eu.ITA;

    document.getElementById("relativ").innerHTML = `${Math.abs((eu.ITA_21 / eu.EUR_21) * 100).toFixed(1)}%`;
    document.getElementById("wachstum").innerHTML = `${Math.abs(eu.ITA_08 / eu.ITA_21).toFixed(1)}%`;
    document.getElementById("gesamt").innerHTML= `${Math.abs(eu.ITA_21 - eu.ITA_08).toFixed(1)}%`;
    
    const chart  = (eu.ITA_21/eu.EUR_21)*100;
    document.querySelector(".chart").setAttribute("style", `height: ${chart}%`);

}

window.addEventListener("load", function(){

    document.querySelector(".germany").addEventListener('click', de)
    document.querySelector(".italy").addEventListener('click',it)
    document.querySelector(".france").addEventListener('click',fra)
    document.querySelector(".spain").addEventListener('click',esp)


});