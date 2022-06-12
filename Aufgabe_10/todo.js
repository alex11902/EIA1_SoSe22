
var closebutton = document.getElementsByTagName("LIST");
var i;
for (i = 0; i < closebutton.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    closebutton[i].appendChild(span);
}

var closeddd = document.getElementsByClassName("close");
var i;
for (i = 0; i < closeddd.length; i++) {
    closeddd[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}


function newTask() {
    var list = document.createElement("li");
    var inputVal = document.getElementById("input").nodeValue;
    var t = document.createTextNode(inputVal);
    list.appendChild(t);
    if (inputVal === '') {
        alert("You must write something!");
    }
    else {
        document.getElementById("mylist").appendChild(list);
    }
    document.getElementById("input").nodeValue = "";
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
