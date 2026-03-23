const text = [
"Future Web/Game Developer",
"Frontend Developer | Game Dev Learner",
"Junior Frontend Developer",
"Learning to Build the Web & Games"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type,1000);
}
else{
setTimeout(type,100);
}

})();

function clickHere(){
alert("Thank you for visiting my portfolio!");
}

function viewProject(){
alert("Project preview coming soon!");
}

function topFunction(){
window.scrollTo({
top:0,
behavior:"smooth"
});

}

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const matrix = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++)
drops[x] = 1;

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#0ff";
ctx.font = fontSize + "px monospace";

for(let i = 0; i < drops.length; i++){

const text = matrix[Math.floor(Math.random()*matrix.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
drops[i] = 0;

drops[i]++;

}

}

setInterval(draw,35);


particlesJS("particles-js",{
"particles":{
"number":{"value":80},
"size":{"value":3},
"color":{"value":"#00eaff"},
"line_linked":{
"enable":true,
"distance":150,
"color":"#00eaff"
},
"move":{
"speed":2
}
}
});