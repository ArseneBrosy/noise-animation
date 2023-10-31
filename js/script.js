// Flow Fields
// by Arsène Brosy
let canvas = document.getElementById("display");
let ctx = canvas.getContext("2d");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const pixelSize = 7;
const perlinZoom = 0.003;
noise.seed(Math.random());

for (let y = 0; y < canvas.height; y+=pixelSize) {
    for (let x = 0; x < canvas.width; x+=pixelSize) {
        let perlinValue = (noise.simplex2(x * perlinZoom, y * perlinZoom) + 1) / 2;
        ctx.fillStyle = `rgba(${perlinValue * 255}, ${perlinValue * 255}, ${perlinValue * 255})`;
        ctx.fillRect(x, y, pixelSize, pixelSize);
    }
}