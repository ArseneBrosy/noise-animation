// Flow Fields
// by Arsène Brosy
let canvas = document.getElementById("display");
let ctx = canvas.getContext("2d");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const pixelSize = 7;
const perlinZoom = 0.003;
const octaveMul = 5;
const octaveWeightMul = 0.1;
const octaves = 4;
const speed = 0.005;
noise.seed(Math.random());

let z = 0;

setInterval(() => {
    for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {
            let perlinValue = 0;
            let maxPerlin = 0;
            for (let i = 0; i < octaves; i++) {
                perlinValue += (noise.simplex3(x * perlinZoom * (octaveMul ** i), y * perlinZoom * (octaveMul ** i), i * 497545 + z) + 1) / 2 * (octaveWeightMul ** i);
                maxPerlin += octaveWeightMul ** i;
            }
            perlinValue /= maxPerlin;
            ctx.fillStyle = `rgba(${perlinValue * 255}, ${perlinValue * 255}, ${perlinValue * 255})`;
            ctx.fillRect(x, y, pixelSize, pixelSize);
        }
    }
    z += speed;
}, 0);