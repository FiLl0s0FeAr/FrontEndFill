function clockPainting() {
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hr = now.getHours();

    let clock = document.getElementById("canvas").getContext("2d");
    clock.save();// put element into stack

    clock.clearRect(0,0,150,150);
    clock.translate(75, 75);
    clock.scale(0.4,0.4);
    clock.rotate(-Math.PI/2);

    clock.strokeStyle = "black";
    clock.fillStyle = "black";
    clock.lineWidth = 8;
    clock.lineCap = "round";

    clock.save();
    clock.beginPath();

    for (let i = 0; i < 12; i++) {
        clock.rotate(Math.PI/6);
        clock.moveTo(100,0);
        clock.lineTo(120,0);
    }

    clock.stroke();// draw
    clock.restore();// takes last element from stack

    clock.save();
    // hour hand. rotating the canvas
    clock.rotate((Math.PI/6)*hr +
        (Math.PI/360)*min +
        (Math.PI/21600)*sec);
    clock.lineWidth = 14;

    clock.beginPath();
    clock.moveTo(-20,0);

    // line almost to the hour markers
    clock.lineTo(80,0);
    clock.stroke();
    clock.restore();

    clock.save();

    // minute hand
    clock.rotate((Math.PI/30*min) +
        (Math.PI/1800)*sec);
    clock.lineWidth = 10;

    clock.beginPath();
    clock.moveTo(-28,0);
    clock.lineTo(112,0);
    clock.stroke();
    clock.restore();

    clock.save();

    // second hand
    clock.rotate(sec * Math.PI/30);
    clock.strokeStyle = "#E22800";
    clock.fillStyle = "#E22800";
    clock.lineWidth = 6;

    clock.beginPath();
    clock.moveTo(-30,0);
    clock.lineTo(83,0);
    clock.stroke();
    clock.restore();

    clock.restore();
}

window.onload = function() {
    setInterval(clockPainting, 1000);  //reupload clock every 1 sec
}