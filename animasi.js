function log() {
    console.log("VB");
}; log();

// source gambar dan setup gambar
var pesawat = new Image();
pesawat.src = "/Asset_picts/654-6544392_plane-emoji-png.png"

// I_obs = obstacke loop
var i=0, i_obs=0, left = 0, right = 1;

// setInterVal untuk menunjukkan satuan detik dalam js
// give a parameter untuk mengisi satuan fps
// showAnimation = function
setInterval(showAnimation,30);

// membuat gerakan animasi

function showAnimation() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0,0,300,300); // untuk membersihkan canvas
}; ctx.save();

// move to right;
if((i < 70) && (right == 1)) {
    i++;
    ctx.translate(i,0);
} else {
    right = 0;
    left = 1;
};

// move to left

if((i > 0) && (left == 1)) {
    i--;
    ctx.translate(i,0);
} else {
    left = 0;
    right = 1;
};

ctx.drawImage(pesawat, 90,255,pesawat.width/2, plane.height/2);

// obstacle / rintangan

i_obs++;

ctx.restore();
ctx.save();
// warna
ctx.fillStyle = 'rgba(255,255,255)';

ctx.translate(0, i_obs);

ctx.fillRect(100, -70, 30, 8);
ctx.fillRect(150, 0, 30, 8);
ctx.fillRect(100, 70, 30, 8);
ctx.fillRect(150, 140, 30, 8);
ctx.fillRect(100, 210, 30, 8);

//ketika di refresh

if(i_obs == 423) {
    i_obs = 0;
}

// background

ctx.restore();
ctx.fillStyle = 'rgba(0,0,0)';
ctx.fillRect(0,0, canvas.width, canvas.height);
