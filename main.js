let container = document.getElementById('container');
function getStarted(){

container.style.display = 'none';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 700;

canvas.style.border = '2px solid white';

let pageCounter = document.getElementById('counter');
let counter = 0;

function getRandomSpeed() {
    return Math.floor(Math.random() * 9) + 1;
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


class Square {
constructor() {
    this.x = Math.floor(Math.random() * (canvas.width - 50));
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.color = getRandomColor();
    this.speedY = getRandomSpeed();
}

draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

update() {
    this.y += this.speedY;

    if (this.y + this.height > canvas.height) {
    this.speedY = -this.speedY; // Odbicie
    this.color = getRandomColor();
    counter++;
    squares.push(new Square());
    }
    if(this.y < 0){
        this.speedY = -this.speedY;
        counter++;
    }
    
}
}

const squares = [new Square()];

function drawSquares() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
squares.forEach(square => square.draw());
}

function animate() {
squares.forEach(square => square.update());
drawSquares();

pageCounter.innerHTML = 'Bounce counter: ' + counter;

requestAnimationFrame(animate);
}
  
animate();

}