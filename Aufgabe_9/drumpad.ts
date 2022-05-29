window.addEventListener("load", clicked);


const soundpad = {

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
    document.querySelector(".pad_a").addEventListener("click", function() {playSample(soundpad.a); });
    document.querySelector(".pad_b").addEventListener("click", function() {playSample(soundpad.c); });
    document.querySelector(".pad_c").addEventListener("click", function() {playSample(soundpad.f); });
    document.querySelector(".pad_d").addEventListener("click", function() {playSample(soundpad.g); });
    document.querySelector(".pad_e").addEventListener("click", function() {playSample(soundpad.hihat); });
    document.querySelector(".pad_f").addEventListener("click", function() {playSample(soundpad.kick); });
    document.querySelector(".pad_g").addEventListener("click", function() {playSample(soundpad.laugh_1); });
    document.querySelector(".pad_h").addEventListener("click", function() {playSample(soundpad.laugh_2); });
    document.querySelector(".pad_i").addEventListener("click", function() {playSample(soundpad.snare); });
    document.querySelector(".playbutton").addEventListener("click", soundplay );
    document.querySelector(".random").addEventListener("click", function() {randombeat();});
}

function playSample(soundpad: string): void {
    var sound: HTMLAudioElement = new Audio(soundpad);
    sound.play();
}

function randombeat(){

for (let index = 0; index < drum_machine.length; index++) {
    const element = drum_machine[index];
    const rng = Math.floor(Math.random()* drum_machine.length );
    playSample(drum_machine[rng]);
}

}

const drum_machine :string [] = [

     "assets/DrumPad/kick.mp3",
     "assets/DrumPad/snare.mp3",
     "assets/DrumPad/hihat.mp3"
];

function soundplay(): void {

    setInterval(function() {
        playSample(
        drum_machine[0]); }, 500);
    setInterval(function() {
        playSample(
        drum_machine[1]
        );     
    },          1000);
    setInterval(function() {
        playSample(
        drum_machine[2]);
        
    },          1500);

}


// function random(){

//     soundpad[Math.floor(Math.random()* soundpad.)];
// }