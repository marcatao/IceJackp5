let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;

function preload() {
    imagemCenario = loadImage('img/background/a1.jpg');
    imagemPersonagem = loadImage('img/personagem/andando/sprite.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight - 40);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(imagemPersonagem);
    frameRate(40);
}

function draw() {
    cenario.exibe();
    cenario.move();
    personagem.exibe();
}