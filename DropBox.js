function testLog() {
    console.log('a')
}; 
testLog();

let dropBox;
dropbBox= document.getElementById('dropbox');

// memasukkan funciton dragenter ke event listener
// dragenter = drag file ke elemen target
dropBox.addEventListener("dragenter" , dragenter, false);

// memasukkan funciton dragover ke event listener
// dragover = ketika drag file sampe drop (menjatuhkan);
dropBox.addEventListener("dragover" , dragover, false);

// memasukkan funciton drop ke event listener
// drop = ketika file sudah dijatuhkan ke elemen target;
dropBox.addEventListener("drop" , drop, false);


// e = event
function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) { 
    e.stopPropagation();
    e.preventDefault();
}

function drop(e) {
    e.stopPropagation();
    e.preventDefault();
    // data transfer
    const dt =  e.dataTransfer;
    const files = dt.files;
    document.getElementById("input").files = files;
}
