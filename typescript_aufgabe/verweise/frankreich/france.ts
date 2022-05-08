console.log("Guten tag");

const frImport2021:number = 508;
const frExport2021:number = 427;
const frImport2020:number = 493;
const frExport2020:number = 428;
const RFR:string = "Republik Frankreich";

console.log(`2021 hat die ${RFR} waren im wert von ${frImport2021} Milliarden Euro Importiert, und Waren im wert von ${frExport2021} Milliarden Euro Exportiert.`);
console.log(`Somit liegt die Außenhandelsbilanz bei ${frExport2021 - frImport2021} Milliarden Euro`);
console.log(` Das entspricht  ${Math.round((frExport2021 / frImport2021) / (frExport2020 / frImport2020) * 100)}% gegenüber der Außenhandelsbilanz im Vorjahr`)