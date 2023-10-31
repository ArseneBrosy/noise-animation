// Flow Fields
// by Arsène Brosy
let canvas = document.getElementById("display");
let ctx = canvas.getContext("2d");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const pixelSize = 7;
const perlinZoom = 0.003;
const octaveMul = 5;
const octaves = [0.8, 0.15, 0.05];
noise.seed(Math.random());

let z = 0;

for (let y = 0; y < canvas.height; y+=pixelSize) {
    for (let x = 0; x < canvas.width; x+=pixelSize) {
        let perlinValue = 0;
        for (let i in octaves) {
            perlinValue += (noise.simplex3(x * perlinZoom * (octaveMul ** i), y * perlinZoom * (octaveMul ** i), i * 497545) + 1) / 2 * octaves[i];
        }
        ctx.fillStyle = `rgba(${perlinValue * 255}, ${perlinValue * 255}, ${perlinValue * 255})`;
        ctx.fillRect(x, y, pixelSize, pixelSize);
    }
}