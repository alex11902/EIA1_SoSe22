
var counter: number = 0;


//var input: HTMLInputElement = document.querySelector("#input")


// Create a "closeddd" button and append it to each list item
var closebutton = document.getElementsByTagName("LI");
var i: number;
for (i = 0; i < closebutton.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  closebutton[i].appendChild(span);
}

// Click on a closeddd button to hide the current list item
var closeddd = document.getElementsByClassName("close");
var i: number;
for (i = 0; i < closeddd.length; i++) {
  closeddd[i]:onclick = function() {
    var div = this.parent;
    div.style.display = "none";
  }
}

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target:this.tagName === 'LI') {
//     ev.target.classList.toggle('check');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newTask() {
  var list = document.createElement("li");
  var inputVal = document.getElementById("input").nodeValue;
  var t = document.createTextNode(inputVal);
  list.appendChild(t);
  if (inputVal === '') {
    alert("You must write something!");
  } else {
    document.getElementById("mylist").appendChild(list);
  }
  document.getElementById("input").nodeValue = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}