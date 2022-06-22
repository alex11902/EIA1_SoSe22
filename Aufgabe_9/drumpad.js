window.addEventListener("load", clicked);
var soundpad = {
    a: "assets/DrumPad/A.mp3",
    c: "assets/DrumPad/C.mp3",
    f: "assets/DrumPad/F.mp3",
    g: "assets/DrumPad/G.mp3",
    hihat: "assets/DrumPad/hihat.mp3",
    kick: "assets/DrumPad/kick.mp3",
    laugh_1: "assets/DrumPad/laugh-1.mp3",
    laugh_2: "assets/DrumPad/laugh-2.mp3",
    snare: "assets/DrumPad/snare.mp3"
};
function clicked() {
    document.querySelector(".pad_a").addEventListener("click", function () { playSample(soundpad.a); });
    document.querySelector(".pad_b").addEventListener("click", function () { playSample(soundpad.c); });
    document.querySelector(".pad_c").addEventListener("click", function () { playSample(soundpad.f); });
    document.querySelector(".pad_d").addEventListener("click", function () { playSample(soundpad.g); });
    document.querySelector(".pad_e").addEventListener("click", function () { playSample(soundpad.hihat); });
    document.querySelector(".pad_f").addEventListener("click", function () { playSample(soundpad.kick); });
    document.querySelector(".pad_g").addEventListener("click", function () { playSample(soundpad.laugh_1); });
    document.querySelector(".pad_h").addEventListener("click", function () { playSample(soundpad.laugh_2); });
    document.querySelector(".pad_i").addEventListener("click", function () { playSample(soundpad.snare); });
    document.querySelector(".playbutton").addEventListener("click", function () { soundplay(); });
    document.querySelector(".random").addEventListener("click", function () { randombeat(); });
}
function playSample(soundpad) {
    var sound = new Audio(soundpad);
    sound.play();
    sound.volume = 0.5;
}
var delay = 0;
function delaySample(soundpad, delaytime) {
    var sound = new Audio(soundpad);
    var delay = 0;
    var isPlaying = function (sound) {
        return sound.paused;
    };
    //if(isPlaying(sound) == true){ document.querySelector(".random").setAttribute("class","background-image: rgb(255,255,255)");}
    setInterval(function () {
        sound.play();
    }, delay);
    sound.volume = 0.5;
}
function randombeat() {
    for (var index = 0; index < drum_machine.length; index++) {
        var element = drum_machine[index];
        var randint = Math.floor(Math.random() * drum_machine.length);
        delaySample(drum_machine[randint], 600);
    }
}
var drum_machine = [
    "assets/DrumPad/kick.mp3",
    "assets/DrumPad/snare.mp3",
    "assets/DrumPad/hihat.mp3"
];
function soundplay() {
    var randint = Math.floor(Math.random() * drum_machine.length);
    if (document.querySelector(".playbutton").getAttribute("class") == "fas fa-play") {
        document.querySelector(".playbutton").setAttribute("class", "fas fa-stop");
        delaySample(drum_machine[randint], 600);
    }
    else {
        document.querySelector(".playbutton").setAttribute("class", "fas fa-play");
        delaySample(drum_machine[randint], 600);
    }
}
// function random(){
//     soundpad[Math.floor(Math.random()* soundpad.)];
// }
