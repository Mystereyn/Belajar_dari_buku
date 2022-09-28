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

if((i > 0) && (left == 1)) {
    i--;
    ctx.translate(i,0);
} else {
    left = 0;
    right = 1;
};

ctx.drawImage(pesawat, 90,255,pesawat.width/2, plane.height/2);

// move to left