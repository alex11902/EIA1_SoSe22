
interface Person{
    vorname: string;
    nachname: string;
    alter :number;
    
}

var Mensch: Person [] = [
    {
    vorname: "Alexander",
    nachname: "Holstein",
    alter: 23
},
{
    vorname: "Larry",
    nachname: "Halmosi",
    alter: 22
},
{
    vorname: "T",
    nachname: "Schell",
    alter: 20
},
];

for (let index = 0; index < Mensch.length; index++) {
    const element = Mensch[index];
    console.log(element.vorname)
}

interface numeric {
    n :number;
}

var n: numeric [] = [
{
    n : 12
},
{
    n: 1892
},
{
    n: 1756
},
{
    n: 56
},
{
    n: 9
},

];

for (let nummer = 0; nummer < en.length; nummer++) {
    
    var Summe = en[nummer]:toString + " " 
    console.log(Summe)
}