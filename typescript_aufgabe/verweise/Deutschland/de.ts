console.log("Guten tag");

const deImport2021:number = 1203;
const deExport2021:number = 1375;
const deImport2020:number = 1025;
const deExport2020:number = 1204;
const BRD:string = "Bundesrepublik Deutschland";

console.log(`2021 hat die ${BRD} waren im wert von ${deImport2021} Milliarden Euro Importiert, und Waren im wert von ${deExport2021} Milliarden Euro Exportiert.`);
console.log(`Damit liegt die Außenhandelsbilanz bei ${deExport2021 - deImport2021} Milliarden Euro`);
console.log(` Das entspricht nur ${Math.round((deExport2021 - deImport2021) / (deExport2020 - deImport2020) * 100)}% gegenüber der Außenhandelsbilanz im Vorjahr`)