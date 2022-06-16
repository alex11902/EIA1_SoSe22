window.addEventListener('load', onClick);
function onClick() {
    document.querySelector("button1").addEventListener("click", newTask);
}
;
//initialisierung der datensatze
var counter = 0;
var closebutton = document.getElementsByTagName("LI");
var closeddd = document.getElementsByClassName("close");
var list = document.querySelector("ul");
var closedd = document.getElementsByClassName("close");
var i;
for (i = 0; i < closebutton.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    closebutton[i].appendChild(span);
}
// Click on a closeddd button to hide the current list item
// var i: number;
// for (i = 0; i < closeddd.length; i++) {
//   closeddd[i]:onclick = function() {
//     var div = this.parent;
//     div.style.display = "none";
//   }
// }
// an jedes listenelement mit dem tag "LI" wird ein checkmark gehangen
list.addEventListener('click', function () {
    if (list.tagName == 'LI') {
        list.classList.toggle('check');
    }
}, false);
function newTask() {
    var list = document.createElement("li");
    var inputVal = document.getElementById("input");
    var t = document.createTextNode(inputVal.value);
    list.appendChild(t);
    if (inputVal.value == "") {
        window.alert("hier gehoert etwas rein");
    }
    else {
        document.getElementById("mylist").appendChild(list);
    }
    inputVal.value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
