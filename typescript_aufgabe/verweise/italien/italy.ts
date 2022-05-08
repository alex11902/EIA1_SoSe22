console.log("Guten tag");

const itImport2021:number = 555;
const itExport2021:number = 643;
const itExport2020:number = 433;
const itImport2020:number = 370;
const IT:string = "Republik Italien";

console.log(`2021 hat die ${IT} waren im wert von ${itImport2021} Milliarden Euro Importiert, und Waren im wert von ${itExport2021} Milliarden Euro Exportiert.`);
console.log(`Damit liegt die Außenhandelsbilanz bei ${itExport2021 - itImport2021} Milliarden Euro`);
console.log(` Das entspricht einer Erhöhung von ${Math.round((itExport2021 - itImport2021) / (itExport2020 - itImport2020) * 100)}% gegenüber dem vorjahr`)