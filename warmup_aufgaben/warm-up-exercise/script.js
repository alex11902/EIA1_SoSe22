window.addEventListener("load", klick);
var names = ["Ben{", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];
function sortaz() {
    for (var index = 0; index < names.length; index++) {
        var element = names.sort()[index];
        console.log(element);
    }
}
function sortza() {
    for (var index = 0; index < names.length; index++) {
        var element = names.reverse()[index];
        console.log(element);
    }
}
function klick() {
    document.querySelector("#buttonaufsteigend").addEventListener("click", sortaz);
    document.querySelector("#buttonabsteigend").addEventListener('click', sortza);
}
