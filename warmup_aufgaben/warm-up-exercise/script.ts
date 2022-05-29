window.addEventListener("load",klick);

var names: string[] = ["Ben{", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
function sortaz(){
for (let index = 0; index < names.length; index++) {
    const element = names.sort()[index];
    console.log(element)
    }
}
function sortza(){
    for (let index = 0; index < names.length; index++) {
        const element = names.reverse()[index];
        console.log(element)
        }
    }

document.querySelector('span').innerHTML = console.log(names.length);

function klick(){

    document.querySelector("#buttonaufsteigend").addEventListener("click",sortaz);
    document.querySelector("#buttonabsteigend").addEventListener('click',sortza);

}